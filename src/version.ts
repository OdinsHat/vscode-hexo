import { workspace as Workspace, window as Window } from 'vscode';

import * as Messages from './messages';
import { ChildProcess, exec } from 'child_process';

/**
 * Print version information from hexo version command
 */
export default function() {
    let version = 'Unknown';
    const cp = require('child_process');
    let { stdout } = cp.spawn('hexo version');
    let matched = stdout.match(/[0-9.]*/);
    console.log(stdout);
};