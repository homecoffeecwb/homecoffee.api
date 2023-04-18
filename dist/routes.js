"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const login_1 = __importDefault(require("./src/login"));
const products_1 = __importDefault(require("./src/products"));
exports.router = express_1.default.Router();
exports.router.use('/login', login_1.default);
exports.router.use('/products', products_1.default);
