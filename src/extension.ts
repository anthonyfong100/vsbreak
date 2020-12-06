import * as vscode from 'vscode';
import viewLoader from "./views/ViewLoader";


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vsbreak" is now active!');

	let disposable = vscode.commands.registerCommand('vsbreak.startBreak', () => {
		vscode.window.showInformationMessage('Enjoy your break!');

		const reactApp = new viewLoader();
		context.subscriptions.push(disposable);
	});
}
export function deactivate() { }
