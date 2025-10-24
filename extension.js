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

    // Команда для ручного вызова через палитру
    let disposable = vscode.commands.registerCommand('dead-inside.say', function () {
        const randomIndex = Math.floor(Math.random() * messages.length);
        vscode.window.showInformationMessage(messages[randomIndex]);
    });
    context.subscriptions.push(disposable);

    // Автоматические сообщения при сохранении файла
    vscode.workspace.onDidSaveTextDocument(() => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        vscode.window.showInformationMessage(messages[randomIndex]);
    });
}

function deactivate() {
    console.log("Dead Inside плагин остановлен.");
}

module.exports = { activate, deactivate };
