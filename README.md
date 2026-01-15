# Portfolio Website

## 1. Setup
This project uses **Vite** and **React**.
To get started, open your terminal (Command Prompt or Terminal) in this folder and run:

```bash
npm install
```

## 2. Testing Locally
To see the website on your computer before publishing:
```bash
npm run dev
```
Open the link shown (usually `http://localhost:5173`).

## 3. Deployment (Publishing to GitHub Pages)

### Using the Automated Script (Recommended)
1. Commit all your changes using **GitHub Desktop**.
2. Push the changes to your GitHub repository.
3. Open your terminal in this folder and run:
   ```bash
   npm run deploy
   ```
   *This command builds the website and pushes it to a special `gh-pages` branch on GitHub.*

4. Go to your repository settings on GitHub -> **Pages**.
5. Ensure the "Source" is set to **Deploy from a branch**.
6. Select the **`gh-pages`** branch and save.
7. Your website will be live at the link provided by GitHub!

### Note for GitHub Desktop
GitHub Desktop is great for managing your code (step 1 & 2), but the `npm run deploy` command handles the specific "building" of the static site required for the web.
