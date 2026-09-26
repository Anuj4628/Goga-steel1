import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sendQuoteHandler from "./api/send-quote.js";

function apiDevServerPlugin(env) {
  return {
    name: "api-dev-server-plugin",
    configureServer(server) {
      Object.assign(process.env, env);

      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split("?")[0] : "";
        if (url === "/api/send-quote") {
          let bodyData = "";
          req.on("data", (chunk) => {
            bodyData += chunk;
          });
          req.on("end", async () => {
            try {
              // Dynamically reload latest .env variables on each dev request
              const currentEnv = loadEnv("development", process.cwd(), "");
              Object.assign(process.env, currentEnv);
              let parsedBody = {};
              if (bodyData) {
                try {
                  parsedBody = JSON.parse(bodyData);
                } catch {
                  parsedBody = bodyData;
                }
              }
              req.body = parsedBody;

              // Ensure express/serverless-like response helpers exist
              if (!res.status) {
                res.status = function (code) {
                  res.statusCode = code;
                  return res;
                };
              }
              if (!res.json) {
                res.json = function (obj) {
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify(obj));
                  return res;
                };
              }

              await sendQuoteHandler(req, res);
            } catch (err) {
              console.error("Vite Dev API Handler Error:", err);
              if (!res.headersSent) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ success: false, error: "Internal Server Error in API handler." }));
              }
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tailwindcss(), apiDevServerPlugin(env)],
  };
});
