import { workspace as Workspace, window as Window } from 'vscode';

import { packageExists } from './utils';
import * as Messages from './messages';
import { ChildProcess, exec } from 'child_process';


export function hexoVersion() {
    if (!Workspace.rootPath) {
        Messages.noDirectoryOpenError();
        return;
    }

    let version = exec(["hexo", 'version']);
    vscode.window.showInformationMessage(v);
};