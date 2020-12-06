import * as vscode from "vscode";

export default class ViewLoader {
  private readonly _panel: vscode.WebviewPanel | undefined;

  constructor() {
    this._panel = vscode.window.createWebviewPanel(
      "vsBreak",
      "vsBreak View",
      vscode.ViewColumn.One,
      {}
    );

    this._panel.webview.html = this.getWebviewContent();
  }

  private getWebviewContent(): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Config View</title>
    </head>
    <body>
        <img src="https://media.giphy.com/media/uoAn5ik8zAuqI/giphy.gif" width="300" /><br/>
    </body>
    </html>`;
  }
}