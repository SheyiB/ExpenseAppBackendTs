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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.getAllUsers = exports.createUser = void 0;
const user_service_1 = require("../services/user.service");
const User = new user_service_1.UserService();
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.createUser(req.body);
        return res.status(201).json(user);
    }
    catch (e) {
        return res.status(500).json(e.message);
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.getAllUser();
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(500).json(e);
    }
});
exports.getAllUsers = getAllUsers;
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.getUser(req.params.id);
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(500).json(e);
    }
});
exports.getUser = getUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.updateUser(req.params.id, req.body);
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(500).json(e);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.deleteUser(req.params.id);
        return res.status(204).json({ data: user });
    }
    catch (e) {
        return res.status(500).json(e);
    }
});
exports.deleteUser = deleteUser;
