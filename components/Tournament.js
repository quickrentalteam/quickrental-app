import Game from "./Game";

export default class Tournament{
    constructor(name, date, key){
        this.key = key;
        this.name = name;
        this.date = date;
        this.end;
        this.games = [];
        this.location = '';
        this.banner = '';
    };

    getName = () =>{
        return this.name;
    };
    getGames = () => {
        return this.games;
    };
    setGames = (game) => {
        this.games = game;
    };
    getKey = () => {
        return this.key;
    };

    getDate = () => {
        return this.date;
    };
    setEnd = (end) => {
        this.end = end
    };
    getEnd = () =>{
        return this.end;
    }
}