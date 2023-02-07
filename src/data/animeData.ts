import berserkIMG from "../images/anime/berserk.jpeg";


class AnimeItem {
    readonly name: string;
    readonly image: string;
    readonly seasons: number[]
    readonly isFinished: boolean
    readonly rating: {
        idea: number,
        world: number,
        story: number,
        characters: number,
    }
    constructor(name: string, image: string, seasons: number[], isFinished: boolean, rating: number[]) {
        this.name = name
        this.image = image
        this.seasons = seasons
        this.isFinished = isFinished
        this.rating = {
            idea: rating[0],
            world: rating[1],
            story: rating[2],
            characters: rating[3],
        }
    }
}


const berserk = new AnimeItem(
    'Берсерк 1997',
    `${berserkIMG}`,
    [15, 24, 7],
    false,
    [6, 7, 8, 9],
)
const OPM = new AnimeItem(
    'One Punch Man',
    " ",
    [12, 12],
    false,
    [9, 9, 9.5, 10],
)

const animeData = [
    berserk,
    OPM,
]
export default animeData;