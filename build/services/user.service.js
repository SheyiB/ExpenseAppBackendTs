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
exports.UserService = void 0;
const user_1 = require("../models/user");
class UserService {
    createUser(body) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.User.create(body);
                return resolve(user);
            }
            catch (e) {
                e.source = 'Create User Service';
                return reject(e);
            }
        }));
    }
    getAllUser() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_1.User.find();
                return resolve(users);
            }
            catch (e) {
                e.source = 'Get User Service';
                return reject(e);
            }
        }));
    }
    getUser(userid) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.User.findById(userid);
                if (user)
                    return resolve(user);
                reject('User Not Found!');
            }
            catch (e) {
                e.source = 'Get User Service';
                return reject(e);
            }
        }));
    }
    updateUser(userid, body) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield user_1.User.findById(userid);
                if (!user)
                    return reject('User not found!');
                user = yield user_1.User.findByIdAndUpdate(userid, body, { new: true, runValidators: true });
                return resolve(user);
            }
            catch (e) {
                e.source = 'Update User Service';
                return reject(e);
            }
        }));
    }
    deleteUser(userid) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield user_1.User.findById(userid);
                if (!user)
                    return reject('User not found!');
                user = yield user_1.User.findByIdAndDelete(userid);
                return resolve(user);
            }
            catch (e) {
                e.source = 'Update User Service';
                return reject(e);
            }
        }));
    }
}
exports.UserService = UserService;
