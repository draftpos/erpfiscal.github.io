# Docus Documentation

[![docus](https://docus.dev/__og-image__/static/og.png)](https://docus.dev)

> Create beautiful docs with Markdown & Vue components

[![npm version](https://img.shields.io/npm/v/docus.svg?style=flat&colorA=020420&colorB=EEEEEE)](https://npmjs.com/package/docus)
[![npm downloads](https://img.shields.io/npm/dm/docus.svg?style=flat&colorA=020420&colorB=EEEEEE)](https://npm.chart.dev/docus)
[![License](https://img.shields.io/npm/l/docus.svg?style=flat&colorA=020420&colorB=EEEEEE)](https://npmjs.com/package/docus)

## 📖 About This Project

This is the **Docus** documentation project - a comprehensive documentation framework built on top of Nuxt 4. Docus provides a beautiful, modern, and feature-rich documentation theme that makes it easy to create stunning documentation sites with Markdown and Vue components.

### ✨ Key Features

- 🎨 **Beautiful Design** - Clean, modern documentation theme
- 📱 **Responsive** - Mobile-first responsive design  
- 🌙 **Dark Mode** - Built-in dark/light mode support
- 🌍 **Internationalization** - Native i18n support for multi-language docs
- 🔍 **Search** - Full-text search functionality
- 📝 **Markdown Enhanced** - Extended markdown with custom components
- 🎨 **Customizable** - Easy theming and brand customization
- ⚡ **Fast** - Optimized for performance with Nuxt 4
- 🔧 **TypeScript** - Full TypeScript support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nuxt-content/docus.git
   cd docus
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to see the documentation site.

## 🛠️ Development

### Available Scripts

- `pnpm run dev` - Start the development server
- `pnpm run docs:dev` - Run the docs development server
- `pnpm run docs:build` - Build the documentation
- `pnpm run lint` - Run ESLint
- `pnpm run typecheck` - Run TypeScript type checking

### Project Structure

This is a monorepo containing several key packages:

```
docus/
├── cli/                    # CLI tool (create-docus)
├── layer/                  # Docus Nuxt layer (main package)
├── docs/                   # Official documentation site
├── .starters/              # Starter templates
└── package.json            # Workspace configuration
```

#### `/layer` - Core Docus Package
The main Docus Nuxt layer that provides:
- Documentation theme and components
- Layouts and templates
- Internationalization support
- Content management utilities

#### `/docs` - Documentation Site
The official Docus documentation that serves as:
- Live documentation for the framework
- Example implementation
- Development playground

#### `/cli` - Command Line Tool
The `create-docus` CLI tool for scaffolding new documentation projects.

### Development Workflow

1. **Make changes** to the layer, docs, or CLI
2. **Test locally** using `pnpm run dev`
3. **Build and verify** with `pnpm run docs:build`
4. **Run tests** and linting before committing

## 📁 Content Structure

### Single Language Documentation
```
content/
├── index.md
├── getting-started.md
└── guide/
    ├── introduction.md
    └── configuration.md
```

### Multi-Language Documentation (i18n)
```
content/
├── en/
│   ├── index.md
│   └── guide/
│       └── introduction.md
└── fr/
    ├── index.md
    └── guide/
        └── introduction.md
```

## 🎯 Creating New Documentation Projects

To create a new documentation project using Docus:

```bash
# Create a new project
npx create-docus my-docs

# Or create with i18n template for multi-language docs
npx create-docus my-docs -t i18n

# Navigate to your project
cd my-docs

# Start development server
npm run dev
```

## ⚡ Built With

Your project comes pre-configured with the best of the Nuxt ecosystem:

- [Nuxt 4](https://nuxt.com) - The web framework
- [Nuxt Content](https://content.nuxt.com/) - File-based CMS
- [Nuxt UI](https://ui.nuxt.com) - UI components
- [Nuxt Image](https://image.nuxt.com/) - Optimized images
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Docus Layer](https://www.npmjs.com/package/docus) - Documentation theme
- [Nuxt i18n](https://i18n.nuxtjs.org/) - Internationalization

## 📚 Documentation

For detailed documentation on customizing your Docus project, visit the [Docus Documentation](https://docus.dev)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines and feel free to submit issues and pull requests.

## 📄 License

Published under the [MIT](LICENSE) license.

---

Docus has been entirely rewritten from scratch and is inspired from [undocs](https://github.com/unjs/undocs) made by [@pi0](https://github.com/pi0) 💚
