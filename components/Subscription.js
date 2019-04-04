export default class Subscription{
    constructor(key, startDate){
        this.key = key;
        this.start = startDate;
        this.end = '';
    }

    getKey = () => {
        return this.key;
    };

    getStartDate = () =>{
        return this.start;
    };

    getEndDate = () => {
        return this.end;
    };
 
}