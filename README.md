# Divvy
Divvy - Expense Allocation System

## Project Description
Divvy is a comprehensive expense allocation system designed to streamline the process of calculating expenses and distributing them among individuals or users. It leverages modern web technologies to provide a smooth and efficient user experience.

### Key Features
- **Expense Calculation**: Automatically calculates expenses based on user inputs. **(To Be Built)**
- **Expense Allocation**: Distributes expenses to the appropriate individuals or users. **(To Be Built)**
- **User-Friendly Interface**: Built with React and TypeScript for a responsive and interactive user experience. **(Being Built)**
- **Backend Support**: Robust backend built with Express and TypeScript to handle data processing and storage. **(Being Built)**
- **Account Creation**: Users must choose a username and password to create an account and use the application. **(To Be Built)**
- **Chat System**: Users may send messages to the other users they have on their friends list. **(To Be Built)**

### Technologies Used
- **Frontend**: React, TypeScript, Vite
- **Backend**: Express, TypeScript
- **Database**: PostgreSQL
- **Hosting/Deployment**: AWS

### Challenges and Future Enhancements
- **Challenges**: Ensuring accurate and efficient expense calculations, managing state and data flow in a seamless manner.
- **Future Enhancements**: Adding user authentication, integrating with third-party services for additional functionality, and improving the overall user experience.

## Table of Contents
1. [Project's Title](#projects-title)
2. [Project Description](#project-description)
3. [Table of Contents](#table-of-contents)
4. [How to Install and Run the Project](#how-to-install-and-run-the-project)
5. [How to Use the Project](#how-to-use-the-project)
6. [Credits](#credits)
7. [License](#license)

## How to Install and Run the Project

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/divvy.git
   cd divvy
   ```

2. **Install dependencies for frontend**
   ```sh
   cd frontend
   npm install
   ```

3. **Install dependencies for backend**
   ```sh
   cd ../backend
   npm install
   ```

4. **Build the frontend**
   ```sh
   cd ../frontend
   npm run build
   ```

5. **Build the backend**
   ```sh
   cd ../backend
   npm run build
   ```

### Running the Project
1. **Start the backend server**
   ```sh
   cd backend
   npm start
   ```

2. **Start the frontend development server**
   ```sh
   cd ../frontend
   npm run dev
   ```

## How to Use the Project
1. **Access the frontend**: Open your browser and navigate to `http://localhost:5174`.
2. **Use the application**: Follow the on-screen instructions to input expenses and allocate them to users.

## Credits
- **Developer**: Jibril Samoun, Peter Le, Kris Tong, Kevin Duong
- **GitHub Profile**: [jibsamoun](https://github.com/jibsamoun) [peterle0604](https://github.com/peterle0604) [kristong123](https://github.com/kristong123) [kevinnduong](https://github.com/kevinnduong)
- **Acknowledgments**: Special thanks to the developers of the technologies used in this project.
---


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
