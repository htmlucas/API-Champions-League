import { Router } from "express"
import { PlayersController } from "./controllers/players-controller"
import { ClubsController } from "./controllers/clubs-controller"

export const router = Router()

const playersController = new PlayersController()
const clubsController = new ClubsController()
// Players
    router.get('/players', playersController.getAllPlayers)

    router.get('/player/:id', playersController.getPlayerById)

    router.post('/players', playersController.createNewPlayer)

    router.delete('/players/:id',playersController.deletePlayer)

    router.patch('/players/:id',playersController.updatePlayerById)

// Clubs

    router.get("/clubs",clubsController.ListClubs)