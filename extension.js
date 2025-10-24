const vscode = require('vscode');

const messages = [
  "крутой код, но тебя все еще никто не любит",
  "и это все на что ты способен? пф",
  "не зря они тебя бросили",
  "лучше бы ты стал тиктокером, писать код не твое",
  "че ты написал??? ты хоть это читаешь???"
];

function activate(context) {
  console.log('Extension "dead-inside" is active');

  let disposable = vscode.commands.registerCommand('dead-inside.say', function () {
    const m = messages[Math.floor(Math.random() * messages.length)];
    vscode.window.showInformationMessage(m);
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
