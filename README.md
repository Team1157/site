[![fancy deploy](https://github.com/Team1157/site/actions/workflows/deploy.yml/badge.svg)](https://github.com/Team1157/site/actions/workflows/deploy.yml)
[![Dependabot Updates](https://github.com/Team1157/site/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/Team1157/site/actions/workflows/dependabot/dependabot-updates)
[![pages-build-deployment](https://github.com/Team1157/site/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Team1157/site/actions/workflows/pages/pages-build-deployment)

> [!NOTE]  
> Until we renew the actual domain it's available at https://1157.adabit.org

## Getting Started

Follow these steps to get a local copy of the project up and running for
development

### Prerequisites

- Ensure you have an adequate version of [Node.js](https://nodejs.org/) and pnpm
  installed

### Installation

1. Clone the repo:
   ```
   git clone https://github.com/Team1157/site
   ```
2. Navigate to the project directory:

   ```
   cd site
   ```

3. Install dependencies:
   ```
   pnpm i
   ```

### Development

- To start the development server:
  ```
  pnpm src:dev
  ```
- To make your code follow the styling:
  ```
  pnpm exec prettier . --write
  ```
