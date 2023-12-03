import * as vscode from 'vscode';

export function registerStutterMode(context: vscode.ExtensionContext) {

    let textChangeListener = vscode.workspace.onDidChangeTextDocument(event => {

        const configuration = vscode.workspace.getConfiguration('vhdlwhiz');
        const stutterModeEnabled = configuration.get<boolean>('stutterModeEnabled');
        const insertSpaces = configuration.get<boolean>('stutterModeInsertSpaces');
        const triggerLeftArrow = configuration.get<string>('stutterModeTriggerLeftArrow');
        const triggerRightArrow = configuration.get<string>('stutterModeTriggerRightArrow');
        const triggerVariableAssignment = configuration.get<string>('stutterModeTriggerVariableAssignment');

        // If there were no changes
        if (event.contentChanges.length === 0) {
            return;
        }

        if (stutterModeEnabled !== true) {
            return;
        }

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        if (editor.document.languageId !== 'vhdl') {
            return;
          }

        if (insertSpaces == null || triggerLeftArrow == null ||
            triggerRightArrow == null || triggerVariableAssignment == null) {
            return;
        }

        if (triggerLeftArrow.length !== 1) {
            vscode.window.showErrorMessage('The vhdlwhiz.triggerLeftArrow setting must be a single character');
            return;
        }
        if (triggerRightArrow.length !== 1) {
            vscode.window.showErrorMessage('The vhdlwhiz.triggerRightArrow setting must be a single character');
            return;
        }
        if (triggerVariableAssignment.length !== 1) {
            vscode.window.showErrorMessage('The vhdlwhiz.triggerVariableAssignment setting must be a single character');
            return;
        }

        // Spaces to insert before and after the <= => := operators
        let insertBefore = ' ';
        let insertAfter = ' ';

        // If the user config says not to insert spaces
        if (!insertSpaces) {
            insertBefore = '';
            insertAfter = '';
        }

        let typedChar = null;

        for (let index = 0; index < editor.selections.length; index++) {
            const change = event.contentChanges[index];

            if (change.text.length !== 1) {
                return;
            }

            const selection = editor.selections[index];
            let textBeforeCursor = '';
            let textTwoBeforeCursor = '';

            // Check if there is a character before the cursor and it's not at the start of the document
            if (!selection.isEmpty || selection.start.character > 0) {
                const rangeBefore = new vscode.Range(selection.start.translate(0, -1), selection.start);
                textBeforeCursor = editor.document.getText(rangeBefore);
            }

            // Check that the current and prev chars for all cursors match
            if (typedChar === null) {
                typedChar = change.text;
            } else {
                if (typedChar !== change.text || typedChar !== textBeforeCursor) {
                    return;
                }
            }

            // Get the character two spots before the cursor if there are enough characters
            if (!selection.isEmpty || selection.start.character > 1) { // Ensure there are at least two characters before the cursor
                const rangeTwoBefore = new vscode.Range(selection.start.translate(0, -2), selection.start.translate(0, -1));
                textTwoBeforeCursor = editor.document.getText(rangeTwoBefore);
            }

            if (textTwoBeforeCursor === ' ' || textTwoBeforeCursor === '\t') {
                insertBefore = '';
            }
        }

        let textToInsert = '';

        if (typedChar === triggerLeftArrow) {
            textToInsert = '<=';
        } else if (typedChar === triggerRightArrow) {
            textToInsert = '=>';
        } else if (typedChar === triggerVariableAssignment) {
            textToInsert = ':=';
        } else {
            return;
        }

        // Add spaces before and after
        textToInsert = insertBefore + textToInsert + insertAfter;

        // Create a workspace edit for batch operations
        const workspaceEdit = new vscode.WorkspaceEdit();

        editor.selections.forEach((selection, index) => {
            
            if (!selection.isEmpty || index >= event.contentChanges.length) {
                return;
            }

            // Get the corresponding change for this selection
            const change = event.contentChanges[index];
            if (change.text.length !== 1 || change.rangeLength !== 0) {
                return;
            }

            // Skip if the character before the cursor doesn't match the typed character
            let cursorLineText = editor.document.lineAt(selection.start.line).text;
            let charBeforeCursor = cursorLineText[selection.start.character - 1];
            if (charBeforeCursor !== change.text) {
                return;
            }

            // Calculate the range to replace including the two typed trigger characters
            const startPosition = selection.start.translate(0, -1);
            const endPosition = selection.start.translate(0, 1);
            const rangeToReplace = new vscode.Range(startPosition, endPosition);

            // Add the edit to the workspaceEdit
            workspaceEdit.replace(editor.document.uri, rangeToReplace, textToInsert);
        });

        // Apply the workspace edit
        vscode.workspace.applyEdit(workspaceEdit).then(success => {
            if (success) {
                // After successful edit, move the cursors after the inserted text
                editor.selections = editor.selections.map(selection => {
                    return new vscode.Selection(selection.end, selection.end);
                });
                console.log(`Text inserted successfully for ${editor.selections.length} cursors.`);
            } else {
                console.log(`Error inserting text for ${editor.selections.length} cursors.`);
            }
        });
    });

    context.subscriptions.push(textChangeListener);
}