const STATUS_IN_PROGRESS = 'In Progress';
const STATUS_FINAL = 'Final';

export default class Game{
    constructor(home, away, time){
        this.hscore = 0;
        this.ascore = 0;
        this.date = '';
        this.hname = home;
        this.aname = away;
        this.time = time;
        this.status = STATUS_IN_PROGRESS;
    };

    getHomeName = () => {
        return this.hname;
    }
    getAwayName = () => {
        return this.aname;
    };
    setDate = (date) =>{
        this.date = date;
    };
    getDate = () =>{
        return this.date;
    };
    getHomeScore = () => {
        return this.hscore;
    };
    getAwayScore = () => {
        return this.ascore;
    };
    getTime = () =>{
        return this.time;
    };
    setTime = (time) => {
        this.time  = time;
    };
    done = () => {
        this.status = STATUS_FINAL;
    }
}