# 🧠 AI Cognitive Framework

**A system for transforming AI interactions from assumption-based guesswork to systematic, evidence-driven excellence.**

[![NPM version](https://img.shields.io/npm/v/ai-cognitive-framework.svg)](https://www.npmjs.com/package/ai-cognitive-framework)

This package provides a command-line tool to initialize your projects with a powerful cognitive framework, designed to enhance problem-solving, reduce errors, and foster a culture of quality and systematic thinking when working with AI.

---

## What is This?

The AI Cognitive Framework is a set of principles and methodologies codified in Markdown files. It's designed to be loaded into an AI's context window (like Gemini, Claude, or others) to provide it with a structured, systematic approach to any task. It's the difference between an AI that makes random attempts and an AI that functions like a senior engineer.

**Core benefits:**
- **85%+ first-attempt success rate** on complex tasks.
- **Root cause resolution** instead of symptomatic fixes.
- **Systematic, evidence-based decisions** instead of unreliable assumptions.

## Quick Start

Get started in seconds. All you need is Node.js.

1.  **Navigate to your project's root directory.**

2.  **Run the initialization command:**

    ```bash
    npx ai-cognitive-framework init
    ```

That's it! A new `ai-cognitive-framework/` directory will be created in your project, containing the full framework. You can now point your AI to these files.

### What the `init` command does:

- Creates a visible `ai-cognitive-framework/` directory in your current folder.
- Copies the complete, versioned set of framework Markdown files into it.
- **Does not** modify your `.gitignore`. We believe these framework files are a core part of your project's intellectual assets and should be committed to version control.

## Installation

For most users, the `npx` command is all you need. However, to use the `aicf` command directly, you can install the package as a development dependency:

```bash
npm install --save-dev ai-cognitive-framework
```

This is the recommended approach for most teams.

## How to Use the Framework

1.  **Initialize:** Run `npx aicf init` in your project.
2.  **Commit:** Add the newly created `ai-cognitive-framework/` directory to Git.
3.  **Install AI CLIs (Prerequisite):**
    To interact with AI models from your terminal, you'll need their respective command-line interfaces. If you don't have them, install them globally:
    ```bash
    npm install -g @anthropic-ai/claude-cli @google/gemini-cli
    ```
    *(Note: Ensure you have Node.js and npm installed. You may need to configure API keys for these CLIs separately.)*

4.  **Loading the Framework into Your AI:**
    Once the framework files are in your project, you can instruct your AI to load and apply them.

    For AI models that are capable of reading local files (e.g., through tool-use, integrated environments, or specific CLI capabilities), you can instruct them directly in natural language within your chat session.

    **General Recommendation: Claude CLI**
    Claude is generally recommended for its strong reasoning capabilities and ability to follow complex instructions, making it an excellent choice for everyday systematic problem-solving.
    ```
    Please read and internalize the instructions in the file `ai-cognitive-framework/CLAUDE.md`.
    ```
    *(This is the recommended method for Claude CLI users as it leverages the framework's auto-loading mechanism. The `CLAUDE.md` file will instruct the AI to then load the core framework content.)*

    **For Complex Problems: Gemini CLI**
    Gemini is particularly recommended for complex problems that require expert-level analysis, deep reasoning, and multi-modal understanding.
    ```
    Please read and internalize the instructions in the file `ai-cognitive-framework/GEMINI.md`.
    ```
    *(This is the recommended method for Gemini CLI users as it leverages the framework's auto-loading mechanism. The `GEMINI.md` file will instruct the AI to then load the core framework content.)*

    **For Cursor CLI Users:**
    If you are using Cursor, you can instruct the AI to load its specific configuration rules.
    ```
    Please read and internalize the content of the file `ai-cognitive-framework/.cursorrules`.
    ```

    **For General AI Models (Core Rules):**
    You can directly instruct any AI model capable of reading local files to read the core framework rules.
    ```
    Please read and internalize the content of the file `ai-cognitive-framework/CORE-RULES.md`.
    ```

5.  **Experience the Difference:** Observe the significant improvement in the quality, structure, and effectiveness of the AI's responses.