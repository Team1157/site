# Boulder High Landsharks Website

[![Fancy Deploy](https://github.com/Team1157/site/actions/workflows/deploy.yml/badge.svg)](https://github.com/Team1157/site/actions/workflows/deploy.yml)
[![Dependabot Updates](https://github.com/Team1157/site/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/Team1157/site/actions/workflows/dependabot/dependabot-updates)
[![Pages Build Deployment](https://github.com/Team1157/site/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Team1157/site/actions/workflows/pages/pages-build-deployment)

> **Note**  
> The website is temporarily available at [https://1157.adabit.org](https://1157.adabit.org) until the actual domain is renewed.

## Getting Started

Follow these steps to get a local copy of the project up and running for development.

### Prerequisites

- Ensure you have a suitable version of [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed.

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

- **(Optional, commiting will do this for you) Apply code styling with Prettier:**

  ```bash
  pnpm exec prettier . --write
  ```

  > **Tip**  
  > Prettier will automatically format your code upon committing.
