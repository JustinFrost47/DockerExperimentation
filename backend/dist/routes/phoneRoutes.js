"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/phoneRoutes.ts
const express_1 = require("express");
const sampleController_1 = __importDefault(require("../controllers/sampleController"));
const router = (0, express_1.Router)();
router.get('/', sampleController_1.default.greet);
exports.default = router;
