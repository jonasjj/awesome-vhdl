'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import vscode = require('vscode');
import fs = require('fs');
import path = require('path');
import cp = require('child_process');
import { VHDL_MODE } from './vhdlMode';
import { VhdlCompletionItemProvider } from './VhdlSuggest';
import { registerStutterMode } from './stutterMode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(ctx: vscode.ExtensionContext): void {
    
    ctx.subscriptions.push(vscode.languages.registerCompletionItemProvider(VHDL_MODE, new VhdlCompletionItemProvider(), '.', '\"'));
     vscode.languages.setLanguageConfiguration(VHDL_MODE.language, {
        indentationRules: {
            decreaseIndentPattern: /\selse|(elsif .*\s+then)|(end\s*\w*\s*(\w*\s*)?;)/,
            increaseIndentPattern: /(^|\s)(begin|then|else|loop|is|(when\s+\w+\s+=>))\s*$/
        },
        wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
        comments: {
            lineComment: '--',
        },
        brackets: [
            ['(', ')'],
        ],

        __electricCharacterSupport: {
            brackets: [
                { tokenType: 'delimiter.curly.ts', open: '{', close: '}', isElectric: true },
                { tokenType: 'delimiter.square.ts', open: '[', close: ']', isElectric: true },
                { tokenType: 'delimiter.paren.ts', open: '(', close: ')', isElectric: true }
            ]
        },

        __characterPairSupport: {
            autoClosingPairs: [
                { open: '(', close: ')' },
                { open: '`', close: '`', notIn: ['string'] },
                { open: '"', close: '"', notIn: ['string'] },
            ]
        }
    });

    if (vscode.window.activeTextEditor) {
    }

    registerStutterMode(ctx);
}

// this method is called when your extension is deactivated
export function deactivate() {
}