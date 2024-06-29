// src/main/MainSystem.js
const BaseSystem = require('./BaseSystem');
const { spawn } = require('child_process');
const path = require('path');
const os = require('os');
const packageJson = require('../../package.json');

class MainSystem extends BaseSystem {
    constructor() {
        super('MainSystem');
    }

    getScriptsPath(isDev) {
        return isDev ? path.join(__dirname, '../../scripts') : path.join(process.resourcesPath, 'scripts');
    }

    logSystemInfo(scriptPath, isDev) {
        this.log(`Script path: ${scriptPath}`);
        this.log(`Running in ${isDev ? 'development' : 'production'} mode`);
        this.log(`Electron executable path: ${process.execPath}`);
        this.log(`Current working directory: ${process.cwd()}`);
        this.log(`Node.js version: ${process.version}`);
        this.log(`Electron version: ${process.versions.electron}`);
        this.log(`User profile path: ${os.homedir()}`);
        this.log(`Software version: ${packageJson.version}`);
    }

    runInitializeScript(isDev) {
        const scriptPath = this.getScriptsPath(isDev);
        this.logSystemInfo(scriptPath, isDev);
        const batFilePath = `"${path.join(scriptPath, 'initialize.bat')}"`;

        try {
            const batProcess = spawn('cmd.exe', ['/c', batFilePath], { shell: true });

            batProcess.stdout.on('data', (data) => {
                data.toString().split(/\r?\n/).forEach(line => line && this.log(`[ShellSystem] ${line}`));
            });

            batProcess.stderr.on('data', (data) => {
                data.toString().split(/\r?\n/).forEach(line => line && this.log(`[ShellSystem] ${line}`));
            });

            batProcess.on('exit', (code) => {
                this.log(`initialize.bat exited with code ${code}`);
            });
        } catch (error) {
            this.log(`Error running initialize.bat: ${error.message}`);
        }
    }
}

module.exports = MainSystem;
