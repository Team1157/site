# Boulder High Landsharks Website

[![Fancy Deploy](https://github.com/Team1157/site/actions/workflows/deploy.yml/badge.svg)](https://github.com/Team1157/site/actions/workflows/deploy.yml)
[![Dependabot Updates](https://github.com/Team1157/site/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/Team1157/site/actions/workflows/dependabot/dependabot-updates)
[![Pages Build Deployment](https://github.com/Team1157/site/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Team1157/site/actions/workflows/pages/pages-build-deployment)

> [!Note]  
> The website is temporarily available at
> [https://1157.adabit.org](https://1157.adabit.org) until the actual domain is
> renewed.

## Getting Started

Follow these steps to get a local copy of the project up and running for
development.

### Prerequisites

Ensure you have a suitable version of [Node.js](https://nodejs.org/),
[npm](https://www.npmjs.com/), [python3](https://www.python.org/),
[pil](https://pypi.org/project/image/), and [pnpm](https://pnpm.io/) installed.

- If you're running Arch Linux, you can install everything with:
  ```bash
  yay -S npm pnpm python3 python-image node
  ```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Team1157/site
   ```

2. **Navigate to the project directory:**

   ```bash
   cd site
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

### Development

- **Start the development server:**
  ```bash
  pnpm src:dev
  ```

> [!TIP] Prettier will automatically format your code upon committing.

> [!TIP] To add photos to the photos page, put them in `public/img/archive`, and
> they'll automatically be added to the page on commit.

## Writing Pages for VuePress

VuePress allows you to write content in both Markdown and html

### Markdown Pages

1. Create a new `.md` file in the `src` directory or its subdirectories.
2. Start the file with YAML front matter:
   ```markdown
   ---
   author: written by <yourname>
   title: <page title>
   createTime: <when you first create the page>
   permalink: <make this the same as the title.
   ---
   ```
3. Write your content using Markdown syntax. For example:

   ```markdown
   # Main Heading

   ## Subheading

   This is a paragraph with **bold** and _italic_ text.

   - List item 1
   - List item 2

   [Link to another page](./another-page.md)

   ![Image description](./path/to/image.jpg)
   ```

4. You can use Vue components within Markdown files:

   ```markdown
   <CustomComponent />

   ::: tip This is a custom container :::
   ```

### HTML Pages

#### You can use Vue directives and components within your HTML:

```html
<div v-for="item in items">{{ item }}</div>
```

### Tips for Writing Pages

- Use relative links for internal navigation: `./page.html` or
  `../folder/page.md`
- Place images in the `public` directory and reference them with absolute paths:
  `/img/image.jpg?url` Make sure to add the ?url or itll break deployments

Remember to restart the development server after adding new pages to see the
changes reflected in the navigation.

## Deployment

The website is automatically deployed using GitHub Actions. Push your changes to
the main branch, and the fancy deployment workflow will handle the rest.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -am 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

For major changes, please open an issue first to discuss what you would like to
change.

## License

This project is licensed under the GPL License - see the [LICENSE](LICENSE) file
for details.
