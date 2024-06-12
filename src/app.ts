import express,{ json} from "express"
import { router } from "./routes"
import cors from "cors"

function createApp(){
    const app = express()    

    app.use(json())    
    app.use('/api',router)
    const corsOptions = {
        origin:"www.localhost:3333",
        methods: ["GET","UPDATE"]
    }
    app.use(cors())
    return app
}


export default createApp
