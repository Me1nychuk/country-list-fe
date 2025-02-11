# Country Data Viewer

This project allows you to view information about countries, including their flags, populations, and other related data. It uses Next.js, TypeScript, and various libraries to deliver a modern and dynamic user experience.

## Technologies

- **Next.js** — for building the project.
- **TypeScript** — for type safety and development.
- **Tailwind CSS** — for styling.
- **ShadCN UI** — for UI components.
- **Recharts** — for creating charts.
- **Axios** — for making API requests.

## Folder Structure

- **`app/`**: Contains the main pages and routing logic.
- **`shared/components/`**: Shared UI components across the project.
- **`shared/services/`**: Contains API service functions.
- **`shared/styles/`**: Contains global and modular CSS styles.
- **`shared/types/`**: TypeScript type definitions used throughout the project.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/country-list-fe
   ```

2. Navigate to the project directory:

   ```bash
   cd country-list-fe
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

1. **dev**: Starts the development server with TurboPack (for faster builds).

   ```bash
   npm run dev
   ```

2. **build**: Builds the project for production.

   ```bash
   npm run build
   ```

3. **start**: Starts the production server.

   ```bash
   npm run start
   ```

4. **lint**: Lints the codebase to ensure code quality.
   ```bash
   npm run lint
   ```

## API Description

This project uses an API for fetching country data. Here’s an overview of available endpoints:

1. **Get All Countries**

   - **Method**: GET
   - **Route**: `/countries`
   - **Description**: Fetches a list of all countries.

2. **Get Country Information**
   - **Method**: GET
   - **Route**: `/country/[id]`
   - **Description**: Fetches detailed information about a specific country based on its ID (or slug).

## Configuration

In the `.env` file, specify the following environment variables:

- `NEXT_PUBLIC_API_URL` — Base URL of your api.

## Folders and Their Contents

### `app/`

Contains the main application pages and route configuration.

- `country/[id]`: Detailed country page.
- `layout.tsx`: Layout for the application pages.
- `page.tsx`: Main page of the project.

### `shared/`

Contains shared logic, services, and components.

#### `shared/components/`

Contains UI components used throughout the project.

#### `shared/services/`

Contains service functions that handle API requests.

#### `shared/styles/`

Contains global and component-specific styles.

#### `shared/types/`

Contains TypeScript types for shared data structures.
