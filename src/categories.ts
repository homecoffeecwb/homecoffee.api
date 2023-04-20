import express, { Express, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
const router = express.Router()
const prisma = new PrismaClient()

router.get('/', async (request:Request, response:Response) => {    

    const categories = await prisma.categories.findMany({ include: { subcategories: true } })    
    response.json(categories)

})

router.post('/new', async (request:Request, response:Response) => {    
    const data = request.body

    const new_category = await prisma.categories.create({ include: { subcategories: true }, data: { name: data.name } })
    response.json(new_category)

})

export default router