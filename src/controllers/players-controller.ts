import { Request, Response } from "express"
import { PlayersServices } from "../services/players-services"
import { noContent } from "../utils/http-helper"
import { IStatisticModel } from "../models/statistic-model"


export class PlayersController {

    playersService: PlayersServices


    constructor(playersService = new PlayersServices()){
        this.playersService = playersService
    }

    getPlayerById = async(request: Request, response: Response) => {    
        const { id } = request.params    

        const playerData = await this.playersService.getPlayerid(parseInt(id))        
        
        response.status(playerData.statusCode).json(playerData.body)
    }

    getAllPlayers = async(request: Request, response: Response) => {
        
        const playersData = await this.playersService.getAllPlayers()

        response.status(playersData.statusCode).json(playersData.body)
    }

    createNewPlayer = async(request: Request, response: Response) => {
        const player = request.body

        console.log(player)

        const httpResponse = await this.playersService.createPlayerService(player)

        if(httpResponse){
            response.status(httpResponse.statusCode).json(httpResponse.body)
        }else{
            const rsp = await noContent()
            response.status(rsp.statusCode).json(rsp.body)
        }
        
    }

    deletePlayer = async(request: Request, response: Response) => {
        const { id } = request.params

        const HttpResponse = await this.playersService.deletePlayerService(parseInt(id))

        if(HttpResponse){
            response.status(HttpResponse.statusCode).json(HttpResponse.body)
        }else{
            const rsp = await noContent()
            response.status(rsp.statusCode).json(rsp.body)
        }
    }

    updatePlayerById = async(request: Request, response: Response) => {
        const { id } = request.params
        const bodyPlayer:IStatisticModel = request.body

        const HttpResponse = await this.playersService.UpdatePlayerService(parseInt(id), bodyPlayer)

        if(HttpResponse){
            response.status(HttpResponse.statusCode).json(HttpResponse.body)
        }else{
            const rsp = await noContent()
            response.status(rsp.statusCode).json(rsp.body)
        }
    }



}