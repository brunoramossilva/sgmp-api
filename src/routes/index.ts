import { Router } from "express";
import userRoutes from "./usuarioRoutes";
import moradorRoutes from "./moradorRoutes";
import funcionarioRoutes from "./funcionarioRoutes";
import sindicoRoutes from "./sindicoRoutes";
import ordemServicoRoutes from "./ordemServicoRoutes";

const router = Router();

router.use("/usuarios", userRoutes);
router.use("/moradores", moradorRoutes);
router.use("/funcionarios", funcionarioRoutes);
router.use("/sindicos", sindicoRoutes);
router.use("/ordens-servico", ordemServicoRoutes);

export default router;
