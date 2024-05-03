### Project Overview
This project is a Next.js 14 application that serves as a basic e-commerce app for the Maildroppa task. It utilizes JSON files served through the API folder to render a list of products on the home page.

### Prerequisites
#### NVM (Node Version Manager)
- Open your terminal.
- Install nvm to manage different node versions. If you have preinstalled node versions without nvm, please remove them before proceeding.
  - For Mac:
    - Install using Homebrew ([brew](https://brew.sh/)):
      ```
      $ brew install nvm
      ```
  - For Linux: [Installation Guide](https://github.com/nvm-sh/nvm#installing-and-updating)
  - For Windows: [Installation Guide](https://github.com/coreybutler/nvm-windows#installation--upgrades)

#### Node
- Before starting, check the `.nvmrc` file for the required node version.
- Install the required node version using nvm:
  ```
  $ nvm install <node_version>      # Install the required version
  $ nvm use <node_version>          # Use it as default in the current terminal window
  $ node -v                         # Verify node version
  $ npm -v                          # Verify npm version
  ```

### Installation Guide
1. Clone the repository:
   ```
   $ git clone https://github.com/Selim-Dev/Maildroppa-task
   ```
2. Navigate to the project directory:
   ```
   $ cd Maildroppa-task
   ```
3. Switch to the required Node.js version:
   ```
   $ nvm use 20.11.0
   ```
4. Install dependencies:
   ```
   $ npm install
   ```
5. Start the development server:
   ```
   $ npm run dev
   ```
6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Project Structure
- **api**: Respnsible for handling requests and serve the json data from server.
- **pages**: Contains Next.js pages, including:
  - `product`: Product-related pages.
  - `about`: About page.
  - `404`: Custom 404 page.
- **components**: Reusable React components, including:
  - `products`: Component for displaying product listings.
  - `single-product`: Component for displaying a single product.
  - `seo`: SEO component for managing meta tags.
  - `home`: Home page component.
  - `navbar`: Navigation bar component.
  - `footer`: Footer component.