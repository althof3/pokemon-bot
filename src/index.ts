import app from "./app";
import dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";
import { Server } from "http";
import "reflect-metadata";
import { Application } from "express";
dotenv.config({path: '../.env'});

const PORT = process.env.PORT || 8080;
let server: Server;

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("✅ Connected to PostgreSQL");
    server = app.listen(PORT, async () => console.log(`🚀 Server running on port ${PORT}`))
    

    console.log('Registered routes:');
    listRoutes(app).forEach(r => console.log(r));
  } catch (error) {
    console.error("Failed to start:", error);
    process.exit(1);
  }
}

const shutdown = async (signal: string) => {
  try {
    console.log(`\n📴 Received ${signal}, shutting down gracefully...`);

    await AppDataSource.destroy();
    console.log("✅ PostgreSQL connection closed");

    server.close(() => {
      console.log("✅ HTTP server closed");
      process.exit(0);
    });
  } catch (err) {
    console.error("❌ Error during shutdown", err);
    process.exit(1);
  }
};

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, () => shutdown(signal));
});

main()

// Function to list all routes
function listRoutes(app: Application): string[] {
  const routes: string[] = [];

  (app._router?.stack || []).forEach((middleware: any) => {
    if (middleware.route) {
      const methods = Object.keys(middleware.route.methods)
        .map(m => m.toUpperCase())
        .join(', ');
      routes.push(`${methods} ${middleware.route.path}`);
    } else if (middleware.name === 'router') {
      middleware.handle.stack.forEach((handler: any) => {
        if (handler.route) {
          const methods = Object.keys(handler.route.methods)
            .map(m => m.toUpperCase())
            .join(', ');
          routes.push(`${methods} ${handler.route.path}`);
        }
      });
    }
  });

  return routes;
}