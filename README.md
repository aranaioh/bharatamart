# Bharat-Mart E-Commerce Frontend

A modern React-based e-commerce frontend application built with TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: Redux Toolkit (configured)
- **Package Manager**: npm

## 📁 Project Structure

```
front_end/
├── 📁 public/                    # Static assets
│   └── vite.svg                 # Vite logo
│
├── 📁 src/                      # Source code
│   ├── 📁 assets/              # Images, icons, and static files
│   │   └── react.svg           # React logo
│   │
│   ├── 📁 components/          # Reusable UI components
│   │   └── 📁 ui/             # shadcn/ui components
│   │       ├── alert.tsx       # Alert component
│   │       ├── avatar.tsx      # Avatar component
│   │       ├── badge.tsx       # Badge component
│   │       ├── button.tsx      # Button component
│   │       ├── card.tsx        # Card component
│   │       ├── checkbox.tsx    # Checkbox component
│   │       ├── dialog.tsx      # Dialog/Modal component
│   │       ├── input.tsx       # Input component
│   │       ├── label.tsx       # Label component
│   │       ├── select.tsx      # Select dropdown component
│   │       ├── switch.tsx      # Switch toggle component
│   │       ├── table.tsx       # Table component
│   │       ├── textarea.tsx    # Textarea component
│   │       └── index.ts        # Component exports
│   │
│   ├── 📁 constants/           # Application constants
│   │
│   ├── 📁 features/            # Feature-based modules
│   │
│   ├── 📁 hooks/               # Custom React hooks
│   │
│   ├── 📁 layouts/             # Layout components
│   │
│   ├── 📁 lib/                 # Utility libraries and configurations
│   │   ├── design-system.ts    # Custom color system
│   │   ├── design-tokens.css   # CSS variables for colors
│   │   ├── design-system-usage.md # Usage guide
│   │   └── utils.ts            # Utility functions (cn, etc.)
│   │
│   ├── 📁 mooks/               # API hooks and data fetching
│   │   └── ProductApi.tsx      # Product API integration
│   │
│   ├── 📁 pages/               # Page components
│   │   └── Home.jsx            # Home page with component showcase
│   │
│   ├── 📁 redux/               # Redux state management
│   │   ├── 📁 slice/           # Redux slices
│   │   └── 📁 store/           # Redux store configuration
│   │
│   ├── 📁 routes/              # Routing configuration
│   │
│   ├── 📁 types/               # TypeScript type definitions
│   │
│   ├── 📁 utils/               # Utility functions
│   │
│   ├── index.css               # Global styles and Tailwind imports
│   ├── main.tsx                # Application entry point
│   └── vite-env.d.ts           # Vite environment types
│
├── components.json             # shadcn/ui configuration
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # App-specific TypeScript config
├── tsconfig.node.json          # Node-specific TypeScript config
└── vite.config.ts              # Vite build configuration
```

## 🎨 Design System

### Custom Colors
The project includes a simplified design system with custom colors:

```typescript
// Available colors in src/lib/design-system.ts
{
  orange: '#FF6F61',
  primaryBg: '#003262',
  secondaryBg: '#6A0DAD',
  greenBg: '#0E9035',
  skyBg: '#0B87AC',
  coldGrayBg: '#959595',
  homeBg: '#EDF7FC',
  pinkBg: '#F3E3F6',
  cuteBlue: '#EDF7FC',
  white: '#ffffff',
  black: '#000000',
  myNewColor: '#FF0000',
  brandColor: '#00FF00',
}
```

### Usage with Tailwind Classes
```jsx
// Background colors
<div className="bg-orange">Orange background</div>
<div className="bg-primary-bg">Primary background</div>

// Text colors
<h1 className="text-orange">Orange text</h1>
<p className="text-primary-bg">Primary text</p>

// With shadcn/ui components
<Button className="bg-orange text-white">Custom Button</Button>
<Card className="bg-home-bg border-orange">Custom Card</Card>
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd front_end
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📦 Key Dependencies

### Core Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing
- `@reduxjs/toolkit` - Redux state management
- `react-redux` - React Redux bindings

### UI & Styling
- `tailwindcss` - Utility-first CSS framework
- `@tailwindcss/vite` - Tailwind CSS for Vite
- `@radix-ui/*` - Headless UI primitives
- `class-variance-authority` - Component variant management
- `clsx` - Conditional className utility
- `tailwind-merge` - Tailwind class merging
- `lucide-react` - Icon library

### Development Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `typescript` - TypeScript support
- `eslint` - Code linting
- `@types/react` - React TypeScript types

## 🎯 Features

### ✅ Implemented
- **Modern React Setup** - React 19 with TypeScript
- **Component Library** - Complete shadcn/ui component set
- **Design System** - Custom color system with Tailwind integration
- **Routing** - React Router setup with home page
- **State Management** - Redux Toolkit configuration
- **Styling** - Tailwind CSS with custom design tokens
- **Type Safety** - Full TypeScript support

### 🚧 In Development
- **E-commerce Features** - Product catalog, cart, checkout
- **User Authentication** - Login, registration, user management
- **API Integration** - Backend connectivity
- **Responsive Design** - Mobile-first approach
- **Performance Optimization** - Code splitting, lazy loading

## 🎨 Component Showcase

The home page (`/`) includes a comprehensive showcase of all available shadcn/ui components:

- **Buttons** - All variants and sizes
- **Cards** - Content containers with headers and footers
- **Forms** - Inputs, selects, checkboxes, switches
- **Data Display** - Tables, badges, avatars
- **Feedback** - Alerts, dialogs
- **Navigation** - Breadcrumbs, pagination

## 🔧 Configuration Files

### `components.json`
shadcn/ui configuration for component generation and styling.

### `vite.config.ts`
Vite build configuration with React plugin and path aliases.

### `tsconfig.json`
TypeScript configuration with path mapping for `@/` imports.

### `tailwind.config.js`
Tailwind CSS configuration (generated by Tailwind v4).

## 📚 Documentation

- **Design System Guide**: `src/lib/design-system-usage.md`
- **Component Documentation**: [shadcn/ui docs](https://ui.shadcn.com/)
- **Tailwind CSS**: [Tailwind docs](https://tailwindcss.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the [Design System Usage Guide](src/lib/design-system-usage.md)
- Review the [shadcn/ui documentation](https://ui.shadcn.com/)
- Open an issue in the repository

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and shadcn/ui**# bharatamart
# bharatamart
# bharatamart
