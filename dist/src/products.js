"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
router.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield prisma.products.findMany();
    console.log(products);
    response.json(products);
}));
router.post('/new', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = request.body;
    const new_product = yield prisma.products.create({
        data: {
            name: data.name,
            description: data.description,
            price: parseFloat(data.price.replace(/[^\d,]/g, '').replace(',', '.')),
            category: data.category
        }
    });
    response.json(new_product);
}));
router.post('/delete', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = request.body;
    const deletion = yield prisma.products.delete({ where: { id: data.id } });
    response.json(deletion);
}));
router.post('/update', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = request.body;
    const product = yield prisma.products.update({
        data: {
            name: data.name,
            description: data.description,
            price: parseFloat(data.price.replace(/[^\d,]/g, '').replace(',', '.')),
            category: data.category
        },
        where: { id: data.id }
    });
    response.json(product);
}));
exports.default = router;
