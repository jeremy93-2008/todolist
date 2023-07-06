import { PrismaClient } from '@prisma/client'
import {Request, Response} from "express";
const prisma = new PrismaClient()

export const get = async (request: Request, response: Response) => {
    const id = request.params.id
    const todoItem = await prisma.todoItems.findFirst({where: {id: Number(id)}})
    return response.json(todoItem)
}