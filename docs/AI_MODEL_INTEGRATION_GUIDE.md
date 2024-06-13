# Universal Endpoint Adapter Research 🧠🔌

## Overview

This document provides an overview of the research conducted to identify suitable Node.js packages for integrating Python and C# AI models with the Prompt Development Environment (PDE).

## Python Integration 🐍

### `python-shell`

- **Description**: A simple way to run Python scripts from Node.js with basic inter-process communication (IPC).
- **Use Case**: Ideal for executing Python scripts and retrieving the output in the PDE.
- **Installation**:
  ```bash
  npm install python-shell
  ```
- **Example Usage**:
  ```javascript
  const { PythonShell } = require('python-shell');

  PythonShell.run('my_script.py', null, (err, results) => {
    if (err) throw err;
    console.log('Results:', results);
  });
  ```

## C# Integration 🔷

### `edge-js`

- **Description**: Allows running .NET and Node.js code in-process, enabling the use of C# functions directly in Node.js.
- **Use Case**: Suitable for invoking C# methods and handling the responses within the PDE.
- **Installation**:
  ```bash
  npm install edge-js
  ```
- **Example Usage**:
  ```javascript
  const edge = require('edge-js');

  const helloWorld = edge.func(() => {
    /*
      async (input) => {
        return ".NET Welcomes " + input.ToString();
      }
    */
  });

  helloWorld('JavaScript', (error, result) => {
    if (error) throw error;
    console.log(result);
  });
  ```

## Conclusion

The `python-shell` and `edge-js` packages provide robust solutions for integrating Python and C# AI models with our PDE. Further testing and implementation will ensure seamless communication between the user's GUI and the AI models.

🚀💻