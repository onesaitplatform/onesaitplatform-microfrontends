# Microfrontend Vue and Vite

## Overview

This project demonstrates the implementation of a microfrontend architecture using Vue.js and Vite, enhanced with the `@originjs/vite-plugin-federation` plugin. Microfrontends are an architectural pattern where a web application is composed of multiple, independently deployable frontend modules. Each module, or microfrontend, can be developed and deployed separately, allowing for greater flexibility and scalability in large-scale projects.

## Project Structure

The project is organized into the following workspaces:

- **main-minsait**: Placeholder for the specific microfrontend related to "minsait."
- **main\***: Main microfrontend workspace.
- **components-library**: Shared components library used across microfrontends.

## Getting Started

Follow these steps to get the project up and running:

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd microfrontend-vue-and-vite
   ```

2. **Install Dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the Project:**

   ```bash
   pnpm start
   ```

   This command will build the project and start the development server. Open your browser and navigate to [http://localhost:5000](http://localhost:5000) to view the application.

## Available Scripts

- **start:** Build and preview the microfrontends.
- **build:** Build the microfrontends for production.
- **preview:** Start the development server for preview.
- **serve-remotes:** Serve the remote microfrontends in parallel.
- **serve-host:** Serve the main microfrontend.
- **stop:** Stop the processes running on ports 5000, 5001, 5002, 5003, and 5007.

## Microfrontend Architecture

Microfrontends allow breaking down a monolithic frontend application into smaller, more manageable pieces. Key advantages include:

- **Independent Development:** Each microfrontend can be developed, tested, and deployed independently, facilitating parallel development efforts.
- **Isolation:** Microfrontends are isolated from each other, reducing the risk of one module affecting the functionality of others.
- **Scalability:** Teams can scale independently, and microfrontends can be developed in different technologies or versions.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) to contribute to this project.

## License

This project is licensed under the [ISC License](LICENSE).

---

**Author:** gcmagana

For more information on microfrontends, Vue.js, and Vite, refer to the official documentation:

- [Microfrontends](https://micro-frontends.org/)
- [Vue.js Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)

Enjoy building scalable and modular frontend applications!
