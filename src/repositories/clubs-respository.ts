import { IClubModel } from "../models/club-model"
import fs from "fs/promises"

const data = [
    {
        id:1,
        name: 'Real Madrid'
    }
]

export class ClubRepository{

    

    getClubs = async(): Promise<IClubModel[]> =>  {
        const data = await fs.readFile("./src/data/clubs.json","utf8")
        const clubs:IClubModel[] = JSON.parse(data)
        return clubs
    }
}