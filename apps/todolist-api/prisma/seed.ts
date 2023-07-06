import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import {fakerES} from "@faker-js/faker";

const prisma = new PrismaClient()
const saltRounds = 10
const password = "Password"

async function main() {
    const user = await prisma.users.upsert({
        where: { email: 'jeremy@hotmail.fr' },
        update: {},
        create: {
            email: 'jeremy@hotmail.fr',
            name: 'Jeremy',
            password: await bcrypt.hash(password, saltRounds),
        }
    });


    [...Array(10)].map(async (e, i) => {
        await prisma.todoItems.create({
            data: {
                title: fakerES.lorem.words(3),
                description: fakerES.lorem.words(10),
                isComplete: fakerES.datatype.boolean(),
                createdAt: fakerES.date.recent({ days: 10 }),
                Users: {
                    connect: {
                        id: user.id
                    }
                }
            }})
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })