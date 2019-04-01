import Tournament from './Tournament';

export default class Organization{
    constructor(key,name){
        this.key = key;
        this.name = name;
        this.tournaments;
        this.num_subs = 0;
        this.color = '#1E90FF';
        this.banner= '';
    }

    getName = () => {
        return this.name;
    };
    setName = (name) => {
        this.name = name;
    };
    getSubCount = () => {
        return this.num_subs;
    };
    setTournaments = (tourn) => {
        this.tournaments = tourn;
    };
    getTournaments = () => {
        return this.tournaments;
    };
    addTournament = (tourn) => {
        this.getTournaments().push(tourn)
    };
    setBanner = (banner) => {
        this.banner = banner;
    };
    getBanner = () => {
        return this.banner;
    }
    setKey = (key) => {
        this.key = key;
    }
    getKey = () => {
        return this.key;
    };
    
    parseTournaments = () =>{
        let tour = this.getTournaments()
        let temp = [];
        for (let key in tour){
            let obj = tour[key];
            let t = new Tournament(obj.name, obj.date, key);
            t.setEnd(obj.end);
            temp.push(t);
        };
        this.tournaments = temp;
    }
}