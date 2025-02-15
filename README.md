
![Screenshot 2025-01-24 221430](https://github.com/user-attachments/assets/e91ae870-f0ed-48d8-bb8e-36ad4470a640)

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Assets & Code](#snippets)
6. 🚀 [More](#more)


## <a name="introduction">🤖 Introduction</a>

Built with the latest Next.js and TypeScript, LangStream is an advanced voice translation tool. It allows users to speak into the microphone, translate the spoken text to another language, and playback the translation. 

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Google Gemini API 
- Mastra.ai [Typescript Ai Framework]
- React Speech Recognition
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Speech Recognition**: Converts spoken words into text using the Web Speech API.

👉 **Text Translation**: Translates the recognized text into a selected target language using Google Gemini/OpenAI's GPT-4 model.

👉 **Audio Playback**: Converts translated text back into speech using the Web Speech API's speech synthesis.

👉 **File Upload**: Reads and translates text from uploaded files, including RTF to plain text conversion.

👉 **Link Content Fetching**: Fetches and translates text content from provided URLs.

👉 **Language Selection**: Allows users to select target languages for translation.

👉 **Copy to Clipboard**: Copies the translated text to the clipboard.

👉 **Like, Dislike, and Favorite**: Provides user interaction features for translations.

👉 **Responsive Design**: Ensures a seamless experience across different devices.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/OmkarBansod02/LangStreamAi.git
cd lang-stream-ai
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
GEMINI_API_KEY=your-gemini-api-key
```


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
