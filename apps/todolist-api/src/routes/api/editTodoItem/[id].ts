import {PrismaClient} from '@prisma/client'
import {Request, Response} from "express";
const prisma = new PrismaClient()

export const post = async (request: Request, response: Response) => {
    const json = request.body as {title: string, description: string, isComplete: string, createdAt: string}
    const todoItem = await prisma.todoItems.update({
        where: { id: Number(request.params.id) },
        data: {
            title: json.title,
            description: json.description,
            isComplete: json.isComplete === "true",
            createdAt: new Date(json.createdAt as string)
        }
    })
    return response.json(todoItem)
}