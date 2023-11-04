import * as vscode from 'vscode';

interface StutterModeTriggers {
    trigger: string;
    insert: string;
}

export function registerStutterMode(context: vscode.ExtensionContext) {
    let lastChar = '';

    let textChangeListener = vscode.workspace.onDidChangeTextDocument(event => {

        const configuration = vscode.workspace.getConfiguration('vhdlwhiz');
        const stutterModeEnabled = configuration.get<boolean>('stutterModeEnabled');
        const insertSpaces = configuration.get<boolean>('stutterModeInsertSpaces');
        const triggerLeftArrow = configuration.get<string>('stutterModeTriggerLeftArrow');
        const triggerRightArrow = configuration.get<string>('stutterModeTriggerRightArrow');
        const triggerVariableAssignment = configuration.get<string>('stutterModeTriggerVariableAssignment');
        
        if (stutterModeEnabled !== true) {
          return;
        }

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
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

        for (const change of event.contentChanges) {

            // Check if the change is a single character and no text is selected
            if (change.text.length === 1 && change.rangeLength === 0) {

                // Check if the last character is the same as the current one
                if (change.text === lastChar) {
                    let textToInsert = '';

                    if (change.text === triggerLeftArrow) {
                        textToInsert = '<=';
                    } else if (change.text === triggerRightArrow) {
                        textToInsert = '=>';
                    } else if (change.text === triggerVariableAssignment) {
                        textToInsert = ':=';
                    }

                    if (textToInsert) {
                        // Extend the range to include the character that triggered the event
                        let rangeToReplace = new vscode.Range(change.range.start.translate(0, -1), change.range.end.translate(0, 1));

                        // If we shall ensure that there are spaces before and after the symbol
                        if (insertSpaces) {

                            // Check if we're at the start of the line or the previous character is whitespace
                            if (change.range.start.character === 1 || !isWhitespaceBefore(editor, rangeToReplace.start)) {
                                textToInsert = ' ' + textToInsert;
                            }

                            textToInsert += ' ';
                        }

                        editor.edit(editBuilder => {
                            editBuilder.replace(rangeToReplace, textToInsert);
                        }).then(success => {
                            if (success) {

                                // Move the cursor after the inserted text
                                const newPosition = rangeToReplace.start.translate(0, textToInsert.length);
                                editor.selection = new vscode.Selection(newPosition, newPosition);
                            } else {
                                vscode.window.showErrorMessage('Error inserting text.');
                            }
                        });
                    }

                    lastChar = '';
                } else {
                    lastChar = change.text;
                }
            }
        }
    });

    context.subscriptions.push(textChangeListener);
}

// Helper function to determine if the character before the current position is whitespace
function isWhitespaceBefore(editor: vscode.TextEditor, position: vscode.Position): boolean {
    if (position.character === 0) return true; // Start of line is treated as whitespace

    const rangeBeforePosition = new vscode.Range(position.translate(0, -1), position);
    const textBeforePosition = editor.document.getText(rangeBeforePosition);

    return textBeforePosition === ' ' || textBeforePosition === '\t';
}
