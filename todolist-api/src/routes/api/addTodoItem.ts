import {Prisma, PrismaClient} from '@prisma/client'
import {Request, Response} from "express";
const prisma = new PrismaClient()

export const post = async (request: Request, response: Response) => {
    const json = request.body as Prisma.TodoItemsCreateWithoutUsersInput
    const todoItem = await prisma.todoItems.create({
        data: {
            title: json.title,
            description: json.description,
            isComplete: Boolean(json.isComplete),
            createdAt: new Date(json.createdAt as string)
        }
    })
    return response.json(todoItem)
}