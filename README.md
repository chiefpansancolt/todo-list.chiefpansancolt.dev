# Todo List Desktop App - Landing Page

A modern, responsive landing page for the Todo List Desktop Application. Built with Next.js 16, this website serves as the official download hub and information portal for the free, cross-platform todo list application.

**Live Site:** [todo-list.chiefpansancolt.dev](https://todo-list.chiefpansancolt.dev)

## About

This landing page provides users with:

- Information about the To-do List Desktop App features and capabilities
- Direct download links for Mac, Windows, and Linux platforms
- Comprehensive FAQ section
- Keyboard shortcuts reference
- Supported languages overview
- Privacy and Terms pages

The desktop application fills the gap between overly simple and unnecessarily complex task managers, providing essential features like categories, priorities, due dates, and keyboard shortcuts without overwhelming users.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **React:** Version 19.2
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **UI Components:** [Flowbite React](https://flowbite-react.com)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons)
- **TypeScript:** Full type safety
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)
- **Code Quality:** ESLint + Prettier

## Features

### Desktop App Features Highlighted

- **Task Management:** Create, edit, delete, and complete tasks with bulk operations
- **Organization:** Custom categories, priority levels, due dates, and rich text details
- **User Experience:** Drag & drop, dark mode, keyboard shortcuts, smooth animations
- **Data Management:** Local storage, JSON/CSV export, import support
- **Internationalization:** Support for 10 languages with dynamic switching
- **Offline-First:** Works completely offline, no account required

### Website Features

- **Platform Detection:** Automatically detects user's OS and suggests the appropriate download
- **GitHub Integration:** Fetches latest release information dynamically
- **SEO Optimized:** Complete meta tags, Open Graph, structured data (JSON-LD)
- **Responsive Design:** Mobile-first approach with adaptive layouts
- **Accessibility:** ARIA labels, semantic HTML, keyboard navigation
- **Dark Mode:** System-aware theme switching

## Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime (Bun, pnpm)
- Package manager (npm, yarn, pnpm, or bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/chiefpansancolt/todo-list.chiefpansancolt.dev.git
cd todo-list.chiefpansancolt.dev

# Install dependencies (choose one)
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add any required environment variables here
```

## Project Structure

```
todo-list.chiefpansancolt.dev/
├── app/
│   ├── changelog/          # Changelog page
│   ├── components/         # React components
│   │   ├── common/         # Reusable UI components
│   │   ├── Downloads.tsx   # Download section
│   │   ├── FAQ.tsx         # FAQ section
│   │   ├── Features.tsx    # Features showcase
│   │   ├── Footer.tsx      # Site footer
│   │   ├── Hero.tsx        # Hero section with downloads
│   │   ├── KeyboardShortcuts.tsx
│   │   ├── Navigation.tsx  # Site navigation
│   │   └── SupportedLanguages.tsx
│   ├── constants/          # Static data and configurations
│   │   ├── data.ts         # Features, FAQ, shortcuts data
│   │   └── platforms.ts    # Platform-specific configurations
│   ├── lib/                # Utility libraries
│   │   ├── seo.ts          # SEO metadata generation
│   │   └── structured-data.ts  # JSON-LD schema generators
│   ├── privacy/            # Privacy policy page
│   ├── terms/              # Terms of service page
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Helper functions
│   │   ├── changeTypes.ts  # Change type utilities
│   │   ├── format.ts       # Formatting utilities
│   │   ├── github.ts       # GitHub API integration
│   │   ├── keyboard.ts     # Keyboard shortcut utilities
│   │   └── platform.ts     # Platform detection & download
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── robots.ts           # Robots.txt generation
│   └── sitemap.ts          # Sitemap generation
├── public/                 # Static assets
├── .github/                # GitHub workflows and configs
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── prettier.config.mjs     # Prettier configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## Available Scripts

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start development server on port 3000   |
| `npm run build`        | Create production build                 |
| `npm run start`        | Start production server                 |
| `npm run lint`         | Run ESLint to check for code issues     |
| `npm run format`       | Format code with Prettier               |
| `npm run format:check` | Check code formatting without modifying |

## Building for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm run start
```

## Deployment

This project is configured for deployment on Vercel. The repository includes a `vercel.json` configuration file.

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be deployed with automatic HTTPS and CDN

### Manual Deployment

Ensure you have the Vercel CLI installed:

```bash
npm i -g vercel
vercel
```

## SEO & Analytics

- **SEO:** Comprehensive meta tags, Open Graph, Twitter Cards
- **Structured Data:** JSON-LD for Software Application, FAQ, WebPage, and Breadcrumbs
- **Sitemap:** Automatically generated at `/sitemap.xml`
- **Robots.txt:** Automatically generated at `/robots.txt`
- **Analytics:** Vercel Analytics integrated for performance monitoring

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Run `npm run format` before committing
- Ensure `npm run lint` passes without errors
- Write meaningful commit messages

## License

This project is private and proprietary.

## Links

- **Website:** [todo-list.chiefpansancolt.dev](https://todo-list.chiefpansancolt.dev)
- **Repository:** [GitHub](https://github.com/chiefpansancolt/todo-list.chiefpansancolt.dev)
- **Desktop App Downloads:** Available on the website for Mac, Windows, and Linux

## Support

For support, bug reports, or feature requests, please join our Discord server or open an issue on GitHub.

---

Built with [Next.js](https://nextjs.org) | Styled with [Tailwind CSS](https://tailwindcss.com) | Deployed on [Vercel](https://vercel.com)
