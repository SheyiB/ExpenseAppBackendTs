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
exports.AuthService = void 0;
const user_1 = require("../models/user");
class AuthService {
    signUp(body) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.User.create(body);
                const token = user.getSignedJwtToken();
                return resolve({ user, token });
            }
            catch (e) {
                e.source = 'Sign-Up Service';
                return reject(e);
            }
        }));
    }
    login(body) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = body;
                const user = yield user_1.User.findOne({ email: email }).select('+password');
                if (!user)
                    reject('FALSE-INFO!');
                const isMatch = yield user.matchPassword(password);
                if (!isMatch)
                    reject({ status: 401, message: 'Invalid Inforamtion Supplied!' });
                user.password = undefined;
                const token = user.getSignedJwtToken();
                if (!token)
                    reject('Could not Sign In User');
                resolve({ user, token });
            }
            catch (e) {
                e.source = 'Get User Service';
                return reject(e);
            }
        }));
    }
}
exports.AuthService = AuthService;
