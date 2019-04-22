const LANDLORD = 'LANDLORD';
const USER = 'USER';

export default class Profile{
    constructor(name, email, password){
        this.role = USER;
        this.name = name;
        this.email = email;
        this.password = password;
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

    setName = (value) => {
        this.name = value;
    }

    setPassword = (array) => {
        this.password = array;
    }

    copyObj = (obj) => {
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.type = obj.type;
    };

    setAdmin = () => {
        this.role = ADMIN;
    };
 
}