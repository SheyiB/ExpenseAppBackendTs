"use strict";
// src/users/users.service.ts
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
exports.remove = exports.update = exports.create = exports.find = exports.findAll = void 0;
/**
 * In-Memory Store
 */
let users = {
    1: {
        id: 1,
        firstname: "Elijah",
        lastname: "Banjo",
        dob: "1-MAY-2000",
        email: "elijahbanjo@gmail.com",
        phone: 2349079891715,
        cash: 5000,
        password: "12345"
    },
    2: {
        id: 2,
        firstname: "Ebenezer",
        lastname: "Banjo",
        dob: "12-NOVEMBER-2001",
        email: "mobolaji77@gmail.com",
        phone: 2349079351705,
        cash: 15000,
        password: "12345"
    },
    3: {
        id: 3,
        firstname: "Olabisi",
        lastname: "Banjo",
        dob: "2-JUNE-1974",
        email: "elijahbanjo@gmail.com",
        phone: 2349079891715,
        cash: 5000,
        password: "12345"
    }
};
/**
 * Service Methods
 */
const findAll = () => __awaiter(void 0, void 0, void 0, function* () { return Object.values(users); });
exports.findAll = findAll;
const find = (id) => __awaiter(void 0, void 0, void 0, function* () { return users[id]; });
exports.find = find;
const create = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new Date().valueOf();
    users[id] = Object.assign({ id }, newUser);
    return users[id];
});
exports.create = create;
const update = (id, userUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, exports.find)(id);
    if (!user) {
        return null;
    }
    users[id] = Object.assign({ id }, userUpdate);
    return users[id];
});
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, exports.find)(id);
    if (!user) {
        return null;
    }
    delete users[id];
});
exports.remove = remove;
