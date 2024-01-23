const vscode = require('vscode');

/**
 * Activate the extension when the extension is activated.
 * @param {vscode.ExtensionContext} context - The extension context.
 */
function activate(context) {
    console.log('Rabbit Syntax Highlighting extension is now active!');

    // Place any activation logic here

    // For example, you can register a command
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        vscode.window.showInformationMessage('Say, Hello to Rabbit!');
    });

    context.subscriptions.push(disposable);
}

/**
 * Deactivate the extension when the extension is deactivated.
 */
function deactivate() {
    console.log('Say, Goodbye to Rabbit!');
}

module.exports = {
    activate,
    deactivate
};
