import * as vscode from 'vscode';

export function registerStutterMode(context: vscode.ExtensionContext) {
    let lastChar = '';

    let textChangeListener = vscode.workspace.onDidChangeTextDocument(event => {
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
                        const rangeToReplace = new vscode.Range(change.range.start.translate(0, -1), change.range.end.translate(0, 1));

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