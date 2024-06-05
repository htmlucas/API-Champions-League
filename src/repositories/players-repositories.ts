import { IPlayerModel } from "../models/player-model"
import { IStatisticModel } from "../models/statistic-model"

const database: IPlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statics: {
            Overall: 93,
            Pace: 85,
            Shooting: 92,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        }
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Forward",
        statics: {
            Overall: 91,
            Pace: 87,
            Shooting: 93,
            Passing: 82,
            Dribbling: 88,
            Defending: 35,
            Physical: 77,
        }
    },
    {
        id: 3,
        name: "Neymar Jr",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Forward",
        statics: {
            Overall: 91,
            Pace: 91,
            Shooting: 85,
            Passing: 86,
            Dribbling: 94,
            Defending: 36,
            Physical: 64,
        }
    },
    {
        id: 4,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statics: {
            Overall: 91,
            Pace: 76,
            Shooting: 86,
            Passing: 93,
            Dribbling: 88,
            Defending: 64,
            Physical: 78,
        }
    },
    {
        id: 5,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Poland",
        position: "Forward",
        statics: {
            Overall: 92,
            Pace: 79,
            Shooting: 92,
            Passing: 79,
            Dribbling: 86,
            Defending: 44,
            Physical: 82,
        }
    },
    {
        id: 6,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statics: {
            Overall: 90,
            Pace: 76,
            Shooting: 60,
            Passing: 71,
            Dribbling: 72,
            Defending: 91,
            Physical: 86,
        }
    },
    {
        id: 7,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statics: {
            Overall: 90,
            Pace: 91,
            Shooting: 87,
            Passing: 81,
            Dribbling: 90,
            Defending: 45,
            Physical: 75,
        }
    },
    {
        id: 8,
        name: "Kylian Mbappe",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statics: {
            Overall: 91,
            Pace: 97,
            Shooting: 89,
            Passing: 80,
            Dribbling: 92,
            Defending: 39,
            Physical: 77,
        }
    },
    {
        id: 9,
        name: "Sergio Ramos",
        club: "Paris Saint-Germain",
        nationality: "Spain",
        position: "Defender",
        statics: {
            Overall: 88,
            Pace: 70,
            Shooting: 65,
            Passing: 71,
            Dribbling: 70,
            Defending: 88,
            Physical: 84,
        }
    },
    {
        id: 10,
        name: "Toni Kroos",
        club: "Real Madrid",
        nationality: "Germany",
        position: "Midfielder",
        statics: {
            Overall: 88,
            Pace: 53,
            Shooting: 82,
            Passing: 91,
            Dribbling: 81,
            Defending: 71,
            Physical: 68,
        }
    },
    {
        id: 11,
        name: "Eden Hazard",
        club: "Real Madrid",
        nationality: "Belgium",
        position: "Forward",
        statics: {
            Overall: 85,
            Pace: 82,
            Shooting: 80,
            Passing: 82,
            Dribbling: 90,
            Defending: 35,
            Physical: 66,
        }
    },
    {
        id: 12,
        name: "Raheem Sterling",
        club: "Chelsea",
        nationality: "England",
        position: "Forward",
        statics: {
            Overall: 88,
            Pace: 90,
            Shooting: 80,
            Passing: 79,
            Dribbling: 89,
            Defending: 45,
            Physical: 66,
        }
    },
    {
        id: 13,
        name: "Luka Modric",
        club: "Real Madrid",
        nationality: "Croatia",
        position: "Midfielder",
        statics: {
            Overall: 88,
            Pace: 74,
            Shooting: 76,
            Passing: 89,
            Dribbling: 91,
            Defending: 72,
            Physical: 65,
        }
    },
    {
        id: 14,
        name: "Paulo Dybala",
        club: "AS Roma",
        nationality: "Argentina",
        position: "Forward",
        statics: {
            Overall: 86,
            Pace: 84,
            Shooting: 81,
            Passing: 84,
            Dribbling: 90,
            Defending: 37,
            Physical: 65,
        }
    },
    {
        id: 15,
        name: "Gareth Bale",
        club: "LAFC",
        nationality: "Wales",
        position: "Forward",
        statics: {
            Overall: 83,
            Pace: 81,
            Shooting: 82,
            Passing: 78,
            Dribbling: 79,
            Defending: 60,
            Physical: 74,
        }
    },
    {
        id: 16,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norway",
        position: "Forward",
        statics: {
            Overall: 88,
            Pace: 89,
            Shooting: 91,
            Passing: 65,
            Dribbling: 80,
            Defending: 45,
            Physical: 88,
        }
    },
    {
        id: 17,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statics: {
            Overall: 89,
            Pace: 70,
            Shooting: 73,
            Passing: 86,
            Dribbling: 84,
            Defending: 83,
            Physical: 76,
        }
    },
    {
        id: 18,
        name: "Romelu Lukaku",
        club: "Inter Milan",
        nationality: "Belgium",
        position: "Forward",
        statics: {
            Overall: 85,
            Pace: 84,
            Shooting: 85,
            Passing: 70,
            Dribbling: 74,
            Defending: 38,
            Physical: 87,
        }
    },
    {
        id: 19,
        name: "Bruno Fernandes",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Midfielder",
        statics: {
            Overall: 88,
            Pace: 73,
            Shooting: 82,
            Passing: 89,
            Dribbling: 84,
            Defending: 67,
            Physical: 76,
        }
    },
    {
        id: 20,
        name: "Thiago Silva",
        club: "Chelsea",
        nationality: "Brazil",
        position: "Defender",
        statics: {
            Overall: 86,
            Pace: 60,
            Shooting: 55,
            Passing: 75,
            Dribbling: 72,
            Defending: 87,
            Physical: 76,
        }
    }
]

export class PlayersRepository{


    getPlayerId = async(id:number): Promise<IPlayerModel | undefined> => {
        const findPlayer = database.find((p) => p.id === id)
        return findPlayer
    }

    findAllPlayers = async(): Promise<IPlayerModel[]> => {
        return database
    }

    insertPlayer = async(player:IPlayerModel) => {
        database.push(player)
        return database
    }

    deletePlayer = async(id: number) => {
        const indexPlayer = database.findIndex((p) => p.id === id);

        if(indexPlayer !== -1){
            database.splice(indexPlayer,1)
            return true
        }

        return false
    }

    UpdatePlayer = async(id: number, statistics: IStatisticModel): Promise<IPlayerModel> => {
        const indexPlayer = database.findIndex((p) => p.id === id);

        if(indexPlayer !== -1){
            database[indexPlayer].statics = statistics
        }

        return database[indexPlayer]
    }
}
