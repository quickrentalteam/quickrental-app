const ADMIN = 'ADMIN';
const USER = 'USER';

export default class Profile{
    constructor(name, email, password){
        this.role = USER;
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.subscriptions = [];
    }

    getRole = () => {
        return this.role;
    }
    getEmail = () => {
        return this.email;
    }

    getName = () => {
        return this.name;
    }
    getPassword = () => {
        return this.password;
    }

    setEmail = (email) => {
        this.email = email;
    }

    setType = (type) => {
        this.type = type;
        if(type == "landlord")
        {
            setAdmin();
        }
            
    }

    setName = (value) => {
        this.name = value;
    }

    setPassword = (array) => {
        this.password = array;
    }

    getSubscriptions = () => {
        return this.subscriptions;
    }
    addSubscription = (sub) =>{
        this.getSubscriptions().push(sub);
    }

    copyObj = (obj) => {
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.subscriptions = obj.subscriptions;
        this.type = obj.type;
    };

    checkSubscription = (key) =>{
        for (let i = 0; i < this.getSubscriptions().length; i ++){
            if (key === this.getSubscriptions()[i].getKey())
                return true;
        }
        return false;
    };

    setAdmin = () => {
        this.role = ADMIN;
    };
 
}