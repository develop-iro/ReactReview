# GifsApp - React + TypeScript

A GIF search application built with React, TypeScript, and Vite, featuring multilanguage support.

## 🚀 Features

- 🔍 Real-time GIF search
- 🌐 Multilanguage support (EN/ES)
- 📱 Responsive design
- 🎨 Modern and user-friendly interface
- 🏷️ Recent searches history

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- i18next for internationalization
- Giphy API
- CSS Modules

## 📦 Project Structure

```
src/
├── components/           # React Components
│   ├── GifGrid.tsx      # GIFs grid
│   ├── Header.tsx       # Header
│   ├── LanguageSwitcher # Language selector
│   ├── PreviousSearches # Recent searches
│   └── SearchInput.tsx  # Search input
├── data/
│   ├── api/             # API configuration
│   ├── interfaces/      # TypeScript interfaces
│   └── resources/       # Resources and actions
├── locales/             # Translation files
│   ├── en.json
│   └── es.json
├── types/               # TypeScript types
└── utils/              # Utilities and helpers
```

## 🚀 Quick Start

1. Clone the repository:

```bash
git clone https://github.com/your-username/gifs-app.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file from `.env.template`:

```bash
cp .env.template .env
```

4. Add your Giphy API key to `.env`:

```
VITE_GIPHY_API_KEY=your_api_key_here
```

5. Start the development server:

```bash
pnpm dev
```

## 🔧 Available Scripts

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm lint`: Run linter
- `pnpm preview`: Preview production build

## 🌐 Internationalization

The app supports multiple languages using i18next:

- 🇺🇸 English
- 🇪🇸 Spanish (default)

Translation files are located in `src/locales/`.

## 🤝 Contributing

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👏 Acknowledgments

- [Giphy API](https://developers.giphy.com/) for providing the GIF service
- [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/) for the amazing tools
- [Vite](https://vitejs.dev/) for the excellent bundler
