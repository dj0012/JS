class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}dhananjay`
    }

    set password(value){
        this._password = value
    }
}

const dhananjay = new User("dhananjay.ai", "abc")
console.log(dhananjay.password);
console.log(dhananjay.email);
