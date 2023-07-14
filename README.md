# Kartly - Online Shopping Center

Kartly is an online shopping center developed using the Next.js framework. It allows users to browse products from various categories, check the product details and search through them.

## Design Decisions

- **Server-side rendering:** Ensuring the app is performant

- **Caching:TanStack Query:** Improving the UX

- **State management**: React composition and passing props

- **CSS framework: Tailwind**: UI design consistency

- **Code formatting and quality: Prettier and Git-hooks** Maintaining code quality and consistency

- **Branching model: Git-flow**

## Code Structure

Using modular and component-based architecture.

## File Structure

```sh
.

├── components

├── hooks

├── pages

│ └──  products

├── public

│ └──  icons

├── styles

├── types

└── utils
```

The file structure of the app is as the following directories:

- **components:** Contains all the UI components used throughout the app. (camelCase)
- **hooks:** Contains custom hooks used in the app. (camelCase)
- **types:** This directory contains TypeScript types used throughout the app. (snake-case)
- **utils:** This directory contains utility functions used throughout the app. (snake-case)

## Tech Stacks and utility tools

- Next.js

- React

- Tailwind CSS

- Git-hooks: To enforce certain rules, such as running Prettier before committing the code changes

- Prettier: To maintain consistency in the codebase

- TanStack Query: To fetch and cache data

- Git-flow: Git branching model

## Screenshot

<img src="./kartly-lg-screenshot.png" width="1920">
