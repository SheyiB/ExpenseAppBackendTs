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
exports.login = exports.signUp = void 0;
const auth_service_1 = require("../services/auth.service");
const auth = new auth_service_1.AuthService();
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth.signUp(req.body);
        return res.status(201).json(user);
    }
    catch (e) {
        return res.status(500).json(e.message);
    }
});
exports.signUp = signUp;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, token } = yield auth.login(req.body);
        res.header('x-auth-token', token);
        return res.status(201).json({ user, token });
    }
    catch (e) {
        return res.status(e.status).json(e);
    }
});
exports.login = login;
