const bcrypt = require('bcrypt');

class UserVerify{
    constructor(userPassword) {
       this.userPassword = userPassword;
    }
    async hashPassword(myPassword){
        const hash = await bcrypt.hash(myPassword, 10);
        console.log(hash);
        return hash;
    }

    async verifyPassword(hashedPassword,myPassword){
        return bcrypt.compare(myPassword, hashedPassword);
    }

}

module.exports = UserVerify;

