# AI Coding Agent Guidelines for This Project

Welcome to the `inspirelooptech` repository! This document provides essential guidelines for AI coding agents to be productive in this codebase. Follow these instructions to understand the architecture, workflows, and conventions specific to this project.

## Project Overview
- **Frameworks and Tools**: This project uses React with Vite for fast development and hot module replacement (HMR). ESLint is configured for linting.
- **Folder Structure**:
  - `src/`: Contains the main application code.
    - `components/`: Reusable UI components.
    - `pages/`: Page-level components representing routes.
    - `assets/`: Static assets like images and styles.
  - `public/`: Publicly accessible files (e.g., images, resumes).
- **Key Features**:
  - Modular React components.
  - Vite for fast builds and development.
  - ESLint for code quality.

## Developer Workflows
### Building and Running the Project
- Install dependencies: `npm install`
- Start the development server: `npm run dev`
- Build for production: `npm run build`
- Preview the production build: `npm run preview`

### Testing
- Currently, no testing framework is integrated. If adding tests, consider Jest or React Testing Library.

### Debugging
- Use browser developer tools and Vite's built-in error overlay for debugging.

## Project-Specific Conventions
- **Component Organization**:
  - Place reusable components in `src/components/`.
  - Page-specific components belong in `src/pages/`.
- **Styling**:
  - Use CSS files located in `src/`.
  - Follow BEM (Block Element Modifier) naming conventions for class names.
- **Routing**:
  - Page components correspond to routes.
  - Ensure routes are defined in `src/main.jsx`.

## Integration Points
- **External Libraries**:
  - React: Core library for building UI.
  - Vite: Development and build tool.
  - ESLint: Linting tool for code quality.
- **Cross-Component Communication**:
  - Use props for parent-to-child communication.
  - Use React Context API or state management libraries (if added) for global state.

## Examples
### Adding a New Page
1. Create a new file in `src/pages/`, e.g., `NewPage.jsx`.
2. Define the component and export it:
   ```jsx
   const NewPage = () => {
       return <div>New Page</div>;
   };
   export default NewPage;
   ```
3. Add the route in `src/main.jsx`:
   ```jsx
   import NewPage from './pages/NewPage';

   <Route path="/new" element={<NewPage />} />
   ```

### Adding a New Component
1. Create a new file in `src/components/`, e.g., `NewComponent.jsx`.
2. Define the component and export it:
   ```jsx
   const NewComponent = ({ text }) => {
       return <div>{text}</div>;
   };
   export default NewComponent;
   ```
3. Use the component in a page or another component:
   ```jsx
   import NewComponent from '../components/NewComponent';

   <NewComponent text="Hello, World!" />
   ```

## Notes
- Follow the existing code style and structure.
- Refer to `README.md` for additional context on ESLint and Vite plugins.

Feel free to update this document as the project evolves!