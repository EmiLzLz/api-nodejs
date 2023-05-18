import { Router } from "express";
import { createEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from "../controllers/employees.controllers.js";

//*Creacion de un router
const router = Router();

router.get("/employees", getEmployees);

//*obtener un solo empleado, por medio del id
router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployee);

//*patch es igual a put, se usa cuando no siempre se actualizaran todos los datos
router.patch("/employees/:id", updateEmployee);

router.delete("/employees/:id", deleteEmployee);

export default router;