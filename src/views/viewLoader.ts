import * as vscode from "vscode";
import * as path from "path";


export default class ViewLoader {
  private readonly _panel: vscode.WebviewPanel | undefined;
  private readonly _extensionPath: string;

  constructor(extensionPath: string) {
    this._extensionPath = extensionPath;
    this._panel = vscode.window.createWebviewPanel(
      "vsBreak",
      "vsBreak View",
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [
          vscode.Uri.file(path.join(extensionPath, "build", "vsBreak"))
        ]

      }
    );

    this._panel.webview.html = this.getWebviewContent();
  }

  private getWebviewContent(): string {

    const reactAppPathOnDisk = vscode.Uri.file(
      path.join(this._extensionPath, "build", "vsBreak", "app.js")
    );
    const reactAppUri = reactAppPathOnDisk.with({ scheme: "vscode-resource" });



    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Config View</title>
        <script>
          window.acquireVsCodeApi = acquireVsCodeApi;
        </script>
    </head>
    <body>
        <div id="root"></div>
        <script src="${reactAppUri}"></script>
        <img src="https://media.giphy.com/media/uoAn5ik8zAuqI/giphy.gif" width="300" /><br/>
    </body>
    </html>`;
  }
}