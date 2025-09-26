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
├── components/           # Componentes React
│   ├── GifGrid.tsx      # Cuadrícula de GIFs
│   ├── Header.tsx       # Encabezado
│   ├── LanguageSwitcher # Selector de idioma
│   ├── PreviousSearches # Búsquedas previas
│   └── SearchInput.tsx  # Input de búsqueda
├── data/
│   ├── api/             # Configuración de API
│   ├── interfaces/      # Interfaces TypeScript
│   └── resources/       # Recursos y acciones
├── locales/             # Archivos de traducción
│   ├── en.json
│   └── es.json
├── types/               # Tipos TypeScript
└── utils/              # Utilidades y helpers
```

## 🚀 Inicio Rápido

1. Clona el repositorio:

```bash
git clone https://github.com/your-username/gifs-app.git
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Crea un archivo `.env` basado en `.env.template`:

```bash
cp .env.template .env
```

4. Agrega tu API key de Giphy al `.env`:

```
VITE_GIPHY_API_KEY=tu_api_key_aquí
```

5. Inicia el servidor de desarrollo:

```bash
pnpm dev
```

## 🔧 Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo
- `pnpm build`: Construye la aplicación para producción
- `pnpm lint`: Ejecuta el linter
- `pnpm preview`: Vista previa de la build de producción

## 🌐 Internacionalización

La aplicación soporta múltiples idiomas usando i18next:

- 🇪🇸 Español (por defecto)
- 🇺🇸 Inglés

Los archivos de traducción se encuentran en `src/locales/`.

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 👏 Agradecimientos

- [Giphy API](https://developers.giphy.com/) por proporcionar el servicio de GIFs
- [React](https://reactjs.org/) y [TypeScript](https://www.typescriptlang.org/) por las herramientas increíbles
- [Vite](https://vitejs.dev/) por el excelente bundler
