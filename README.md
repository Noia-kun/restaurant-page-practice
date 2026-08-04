# Restaurant Page

A single-page restaurant website built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum. The project focuses on using Webpack to bundle a multi-page-feeling site built entirely with vanilla JavaScript, ES Modules, and the DOM API — no frameworks.

## Live Demo

[Restaurant Page Demo](https://noia-kun.github.io/restaurant-page-practice/)

## Features

- **Tabbed navigation** — Home, Menu, and Contact pages are swapped in and out of a single `div#content` without reloading the page.
- **Modular JavaScript** — Each page (Home, Menu, Contact) is its own ES module that builds and returns its DOM content.
- **Webpack bundling** — Source files are bundled into a single `bundle.js`, with `html-webpack-plugin` auto-generating the HTML shell and `css-loader`/`style-loader` handling styles.
- **Responsive-ish styling** — Simple, clean CSS for the nav bar, buttons, and content area.

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES Modules)
- Webpack 5 (`webpack`, `webpack-cli`, `webpack-dev-server`, `html-webpack-plugin`, `css-loader`, `style-loader`)

## Project Structure

```
restaurant-page/
├── src/
│   ├── pages/
│   │   ├── home.js
│   │   ├── menu.js
│   │   └── contact.js
│   ├── index.js
│   ├── template.html
│   └── styles.css
├── webpack.config.js
├── package.json
└── .gitignore
```

## Running Locally

```bash
npm install
npm run start
```

Then open `http://localhost:8080`.

## Building

```bash
npm run build
```

Outputs the production bundle to `dist/`.

## Deployment

Deployed to GitHub Pages via the `gh-pages` branch, following the subtree-push method from The Odin Project's deployment lesson.
