import {Response,Request} from "express"
import { ClubService } from "../services/clubs-services"
import { ok } from "../utils/http-helper"

export class ClubsController {

    clubService: ClubService

    constructor(clubService = new ClubService()){
        this.clubService = clubService
    }

    ListClubs = async(req: Request, res: Response) => {
        const clubs = await this.clubService.getClub()
        res.status(clubs.statusCode).json(clubs.body)

    }

}