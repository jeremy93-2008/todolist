import { PrismaClient } from '@prisma/client'
import {Request, Response} from "express";
const prisma = new PrismaClient()

export const get = async (request: Request, response: Response) => {
    const todoItems = await prisma.todoItems.findMany()
    return response.json(todoItems)
}