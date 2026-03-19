import { Router } from "express";
import element_manager from "../manager/element_manager";

const routes = Router();

routes.get("/",async (req, res) => {
    try {
        console.log("GET /api/element/")
        const retour = await element_manager.getAll()
        console.log(retour)
        res.json(retour)
    } catch(error) {
        console.error(error)
    }
})

routes.post("/create", async (req, res) => {
    try {
        console.log("POST /api/element/create")
        const data = req.body
        const retour = await element_manager.create(data)
        res.json(retour)
    } catch (error) {
        console.error(error)
    }
})

export default routes