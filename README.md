# Curso IA Generativa - [m].seny [labs]

This project is a static website with serverless functions to securely handle API requests to Google Gemini.

## Project Structure

- `public/index.html`: The main website file.
- `api/generate.js`: Serverless function to generate impact reports.
- `api/chat.js`: Serverless function to handle chat interactions.
- `package.json`: Project configuration.

## Setup Instructions

### Local Development

1.  Install Vercel CLI:
    ```bash
    npm install -g vercel
    ```

2.  Run the development server:
    ```bash
    vercel dev
    ```

3.  Set up your environment variable locally:
    - Create a `.env` file in the root directory.
    - Add `GEMINI_API_KEY=your_api_key_here`.

### Deployment to Vercel

1.  Push this repository to GitHub.
2.  Import the project into Vercel.
3.  In the Vercel Project Settings, go to **Environment Variables**.
4.  Add a new variable:
    - **Key**: `GEMINI_API_KEY`
    - **Value**: Your Google Gemini API Key.
5.  Deploy.

## Security Note

The API key is handled server-side in the `api/` directory. It is strictly forbidden to expose the API key in `public/index.html` or any client-side code.
