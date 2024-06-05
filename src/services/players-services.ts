import { IPlayerModel } from "../models/player-model"
import { IStatisticModel } from "../models/statistic-model"
import { PlayersRepository } from "../repositories/players-repositories"
import { badRequest, created, noContent, notFound, ok } from "../utils/http-helper"

export class PlayersServices{

    playerRepository: PlayersRepository
    constructor(playerRepository = new PlayersRepository()){
        this.playerRepository = playerRepository
    }

    getPlayerid = async(id: number) => {

        const data = await this.playerRepository.getPlayerId(id)
        let response = null

        if(data){
           response =  await ok(data)
        }else{
            response = await notFound()
        }
        
        return response
    }

    getAllPlayers = async() => {
        const data = await this.playerRepository.findAllPlayers()
        let response = null

        if(data){
            response =  await ok(data)
         }else{
             response = await noContent()
         }
         
         return response
    }

    createPlayerService = async(player:IPlayerModel) => {
        let response = null;

        if(Object.keys(player).length !== 0){
            await this.playerRepository.insertPlayer(player)
            response = await created()
        }else{
            response =  await badRequest()
        }

        return response
    }

    deletePlayerService = async(id: number) => {
        const verifyDelete = await this.playerRepository.deletePlayer(id)

        if(verifyDelete){
            return await ok({message:'deleted'})
        }else{
            return await badRequest()
        }

        
        
    }

    UpdatePlayerService = async(id: number, statistics: IStatisticModel) => {
        let response = null;
        const dataPlayer =  await this.playerRepository.UpdatePlayer(id,statistics)
        if(Object.keys(dataPlayer).length === 0){
            response =  await badRequest()
        }else{
            response = await ok(dataPlayer)        
        }
        
        return response
    }
}