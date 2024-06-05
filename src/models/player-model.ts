export interface IPlayerModel {
    id: number,
    name: string,
    club: string,
    nationality: string,
    position: string,
    statics: {
        Overall: number,
        Pace: number,
        Shooting: number,
        Passing: number,
        Dribbling: number,
        Defending: number,
        Physical: number,
    }    
}