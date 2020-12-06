import { workspace as Workspace, window as Window } from 'vscode';

import * as Messages from './messages';
import { ChildProcess, exec } from 'child_process';

/**
 * Print version information from hexo version command
 */
export default function() {
    if (!Workspace.rootPath) {
        Messages.noDirectoryOpenError();
        return;
    }

    let version = exec(["hexo", 'version']);
    vscode.window.showInformationMessage(version);
};