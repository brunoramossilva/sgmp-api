import { Router } from "express";
import userRoutes from "./usuarioRoutes";
import moradorRoutes from "./moradorRoutes";
import funcionarioRoutes from "./funcionarioRoutes";

const router = Router();

router.use("/usuarios", userRoutes);
router.use("/moradores", moradorRoutes);
router.use("/funcionarios", funcionarioRoutes);

export default router;
