export default class Profile{
    constructor(name, email, password, type){
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.bookmarks = bookmarks;
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

    setType = (type) =>{
        this.type = type;
    }

    getBookmarks = () => {
        return this.bookmarks;
    }

    addBookmark = (apt) =>{
        this.getBookmarks().push(apt);
    };

    copyObj = (obj) => {
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.type = obj.type;
    };
}