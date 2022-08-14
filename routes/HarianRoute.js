import express from "express";
import {
    getHarian,
    getHarianById,
    createHarian,
    updateHarian,
    deleteHarian
} from "../controllers/HarianController.js";
const router = express.Router();

router.get('/harian', getHarian);
router.get('/harian/:id', getHarianById);
router.post('/harian', createHarian);
router.patch('/harian/:id', updateHarian);
router.delete('/harian/:id', deleteHarian);

export default router;