const vscode = require('vscode');

function activate(context) {
    console.log("Dead Inside плагин запущен!");

    const messages = [
        "крутой код, но тебя все еще никто не любит",
        "и это все на что ты способен? пф",
        "не зря они тебя бросили",
        "лучше бы ты стал тиктокером, писать код не твое",
        "че ты написал??? ты хоть это читаешь???"
    ];

    let charCount = 0;

    const changeListener = vscode.workspace.onDidChangeTextDocument((event) => {
        for (const change of event.contentChanges) {
            charCount += change.text.length;
        }

        const threshold = 5 + Math.floor(Math.random() * 6);
        if (charCount >= threshold) {
            const randomIndex = Math.floor(Math.random() * messages.length);
            vscode.window.showInformationMessage(messages[randomIndex]);
            charCount = 0;
        }
    });

    context.subscriptions.push(changeListener);

    const disposable = vscode.commands.registerCommand('dead-inside.say', function () {
        const randomIndex = Math.floor(Math.random() * messages.length);
        vscode.window.showInformationMessage(messages[randomIndex]);
    });

    context.subscriptions.push(disposable);
}

function deactivate() {
    console.log("Dead Inside плагин остановлен.");
}

module.exports = { activate, deactivate };
