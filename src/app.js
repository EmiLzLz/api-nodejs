import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

//*interpretar datos que se mandan de la palicacion cliente
app.use(express.json());

app.use(indexRoutes);
app.use("/api", employeesRoutes);

//*si no existe la ruta muestra un mensaje
app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

export default app;
