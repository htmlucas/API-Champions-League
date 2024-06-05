import { ClubRepository } from "../repositories/clubs-respository"
import { noContent, ok } from "../utils/http-helper"


export class ClubService{

    clubRepository:ClubRepository

    constructor(clubRepository = new ClubRepository()){
        this.clubRepository = clubRepository
    }

    getClub = async() => {
        let response = null
        const data = await this.clubRepository.getClubs()

        if(data){
            response = await ok(data)
        }else{
            response = await noContent()
        }
        return response
    }
}