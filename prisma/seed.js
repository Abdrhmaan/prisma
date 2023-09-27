
const { PrismClient } = require("@prisma/client");


const prisma = new PrismClient()


async function seed(){


    try{


        await prisma.author.create({
            data : {
                name : "xaaancde",
                email :"faarx@gmail.com"
            }
        })
    



    } catch(e){
        console.log(e)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

seed()