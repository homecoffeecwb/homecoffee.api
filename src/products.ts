import express, { Express, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
const router = express.Router()
const prisma = new PrismaClient()

router.get('/', async (request:Request, response:Response) => {
    const products = await prisma.products.findMany()
    console.log(products)
    response.json(products)

})

router.post('/new', async (request:Request, response:Response) => {    
    const data = request.body

    const new_product = await prisma.products.create({
        data: {
            name: data.name,
            description: data.description,
            price: parseFloat(data.price.replace(/[^\d,]/g, '').replace(',', '.')),
            category: data.category
        }
    })

    response.json(new_product)

})

router.post('/delete', async (request:Request, response:Response) => {    
    const data = request.body

    const deletion = await prisma.products.delete({ where: { id: data.id } })

    response.json(deletion)

})

router.post('/update', async (request:Request, response:Response) => {    
    const data = request.body

    const product = await prisma.products.update({
        data: {
            name: data.name,
            description: data.description,
            price: parseFloat(data.price.replace(/[^\d,]/g, '').replace(',', '.')),
            category: data.category
        },
        where: { id: data.id }
    })

    response.json(product)

})

export default router