import { Router } from "express";
import { SindicoController } from "../controllers/sindicoController";

const router = Router();
const controller = new SindicoController();

router.post("/", (req, res) => controller.create(req, res));
router.get("/", (req, res) => controller.getAll(req, res));
router.get("/:cpf", (req, res) => controller.getByCpf(req, res));
router.delete("/:cpf", (req, res) => controller.delete(req, res));

export default router;
