"use strict";
/**
 * Required External Modules and Interfaces
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserService = __importStar(require("./users.service"));
/**
 * Router Definition
 */
exports.usersRouter = express_1.default.Router();
/**
 * Controller Definitions
 */
// GET users
exports.usersRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserService.findAll();
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
// GET users/:id
exports.usersRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const user = yield UserService.find(id);
        if (user) {
            return res.status(200).send(user);
        }
        res.status(404).send("User not found");
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
// POST users
exports.usersRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const newUser = yield UserService.create(user);
        res.status(201).json(newUser);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
// PUT users/:id
exports.usersRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const userUpdate = req.body;
        const existingUser = yield UserService.find(id);
        if (existingUser) {
            const updatedUser = yield UserService.update(id, userUpdate);
            return res.status(200).json(updatedUser);
        }
        const newUser = yield UserService.create(userUpdate);
        res.status(201).json(newUser);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
// DELETE users/:id
exports.usersRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        yield UserService.remove(id);
        res.sendStatus(204);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
