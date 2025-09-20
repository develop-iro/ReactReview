# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# React Development Best Practices & Concepts

## Best Practices

1. **Component Structure**
   - Use functional components and hooks.
   - Keep components small and focused.
   - Name components with PascalCase.

2. **JSX Usage**
   - Return a single parent element (use fragments `<>...</>` if needed).
   - Use camelCase for attributes (e.g., `className`, `onClick`).
   - Close all tags properly.
   - Use `{}` for embedding JavaScript expressions.
   - Use unique `key` props for list items.

3. **Styling**
   - Use CSS Modules, inline styles, or CSS-in-JS for scoped styles.
   - Prefer reusable style objects or classes.

4. **Props & State**
   - Use `interface` or `type` for props typing in TypeScript.
   - Use `useState` and other hooks for state management.
   - Pass props explicitly and document them.

5. **Code Quality**
   - Use ESLint and Prettier for code consistency.
   - Write clear comments for complex logic.
   - Avoid unused variables and props.

6. **StrictMode**
   - Wrap your app in `<StrictMode>` to catch potential problems early.

---

## Concepts Applied in `00-first-steps`

- **Functional Components:**
  - All components (`First`, `ItemCounter`, `MyAwesomeApp`) are functional.

- **JSX & Fragments:**
  - Components use JSX syntax and fragments (`<>...</>`) to group elements.

- **Props Typing:**
  - Props are typed using both `type` and `interface` in TypeScript.

- **State Management:**
  - `useState` hook is used in `ItemCounter` for local state.

- **List Rendering:**
  - `MyAwesomeApp` renders a list with unique `key` props.

- **Styling:**
  - Inline style objects are used for button styling.

- **StrictMode:**
  - The app is wrapped in `<StrictMode>` in `main.tsx` for development safety.

---

## Useful Resources
- [React Docs](https://react.dev/)
- [TypeScript React](https://www.typescriptlang.org/docs/handbook/react.html)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

Feel free to expand this README as your project grows!
