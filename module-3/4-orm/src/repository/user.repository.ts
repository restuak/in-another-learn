import { ICreateUserParam } from "../interfaces/user.types";
import prisma from "../lib/prisma"

export async function createUserRepo (params: ICreateUserParam) {
    try {
        const resp = await prisma.user.create({

            data:{
                ...params,
            }
        })
        return resp;
        catch(err) {
            throw err;
        }
    }
    
}