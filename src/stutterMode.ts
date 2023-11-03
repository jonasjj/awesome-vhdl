import * as vscode from 'vscode';

export function registerStutterMode(context: vscode.ExtensionContext) {
    let lastChar = '';

    let textChangeListener = vscode.workspace.onDidChangeTextDocument(event => {
        const configuration = vscode.workspace.getConfiguration('vhdlwhiz');
        const stutterModeEnabled = configuration.get<boolean>('stutterModeEnabled', true);
        const insertSpaces = configuration.get<boolean>('stutterModeSpaces', true);

        if (!stutterModeEnabled) {
            return;
        }

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No active editor
        }

        for (const change of event.contentChanges) {
            // Check if the change is a single character and no text is selected
            if (change.text.length === 1 && change.rangeLength === 0) {
                // Check if the last character is the same as the current one
                if (change.text === lastChar) {
                    let textToInsert = '';

                    if (change.text === '.') {
                        textToInsert = '=>';
                    } else if (change.text === ',') {
                        textToInsert = '<=';
                    }

                    if (textToInsert) {
                        // Extend the range to include the character that triggered the event
                        let rangeToReplace = new vscode.Range(change.range.start.translate(0, -1), change.range.end.translate(0, 1));

                        if (insertSpaces) {
                            // Ensure that there are white spaces before and after

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
