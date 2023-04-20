import express from 'express';

import UserRoutes from './UserRoutes.js';
import MailRoutes from './MailRoutes.js';
import BudgetRoutes from './BudgetRoutes.js';

const router = express.Router();

router.use("/api/users", UserRoutes);
router.use("/api/mail", MailRoutes);
router.use("/api/budget", BudgetRoutes);

export default router;
