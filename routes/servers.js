import { Router } from "express";
import { getAll, create, remove, update } from "../controller/servers.js";

const router = Router()


router.get('/todos', getAll)
// router.get('/todos/:id' , getAll)

router.post('/postodos', create) 

router.delete('/delete/:id', remove)

router.put('/put/:id', update)


//  /cars - getAll 
//  /cars/:id - getById
//  /cars/owner/:id - getByOwnerId
//  /cars/color/:id - getByColorId




export default router