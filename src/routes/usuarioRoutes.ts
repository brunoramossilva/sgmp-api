import { Router } from "express";
import { UserController } from "../controllers/usuarioController";

const router = Router();
const controller = new UserController();

router.post("/", (req, res) => controller.create(req, res));
router.get("/", (req, res) => controller.getAll(req, res));
router.get("/:cpf", (req, res) => controller.getByCpf(req, res));
router.put("/:cpf", (req, res) => controller.update(req, res));
router.delete("/:cpf", (req, res) => controller.delete(req, res));

export default router;
