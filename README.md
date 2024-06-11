# Better Prompt

## Welcome to the Future of AI Prompt Engineering!

Better Prompt is an open-source initiative aimed at revolutionizing the way we build and test AI prompts. Our platform is designed for developers, researchers, and enthusiasts alike, providing a collaborative space to innovate and push the boundaries of AI interactions.

### 🚀 Features

- **Interactive Prompt Sandbox:** Experiment with prompts in real-time, with instant feedback.
- **Community-Powered Libraries:** Access and contribute to a growing database of prompts for various AI models.
- **Collaborative Tools:** Pair programming, code reviews, and more - all in one place.
- **Extensive Documentation:** From getting started guides to advanced usage, we've got you covered.

### 🌱 Getting Started with VS Code

To start developing with Better Prompt in VS Code, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://git.tonic-ai.com/contribute/prompt-dev-env
   ```
2. Navigate to the project directory:
   ```bash
   cd prompt-dev-env
   ```
3. Open the project in VS Code:
   ```bash
   code .
   ```
4. In VS Code, open the integrated terminal and navigate to the `gui` directory:
   ```bash
   cd gui
   ```
5. Install the dependencies:
   ```bash
   npm install
   ```
6. Start the development server:
   ```bash
   npm run start
   ```

### 🔨 Building from Source

To build the "Better Prompt" Electron app from source, ensure you are in the `gui` directory and run:

```bash
npm run package
```

Or to build the project as a setup  installer, run the following command:

```bash
npm run make
```

This will invoke Vite and Electron Forge to package your pure JavaScript application into an executable format for your platform.

### 🤝 Contributing

Join us in shaping the future of AI! We’re looking for passionate individuals to contribute to Better Prompt. Check out `CONTRIBUTE.md` for more details on how you can make an impact.

### 📜 License

Better Prompt is proudly open-sourced under the MIT license. See the `LICENSE` file for more information.