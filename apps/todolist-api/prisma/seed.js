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
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const faker_1 = require("@faker-js/faker");
const prisma = new client_1.PrismaClient();
const saltRounds = 10;
const password = "Password";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.upsert({
            where: { email: 'jeremy@hotmail.fr' },
            update: {},
            create: {
                email: 'jeremy@hotmail.fr',
                name: 'Jeremy',
                password: yield bcrypt_1.default.hash(password, saltRounds),
            }
        });
        [...Array(10)].map((e, i) => __awaiter(this, void 0, void 0, function* () {
            yield prisma.todoItems.create({
                data: {
                    title: faker_1.fakerES.lorem.words(3),
                    description: faker_1.fakerES.lorem.words(10),
                    isComplete: faker_1.fakerES.datatype.boolean(),
                    createdAt: faker_1.fakerES.date.recent({ days: 10 }),
                    Users: {
                        connect: {
                            id: user.id
                        }
                    }
                }
            });
        }));
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
