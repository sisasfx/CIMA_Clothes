const Model = require("../BBDD/modelUsers");
const Verify = require("../auth/pass-verify");

class LoginInit {
    constructor() {
        this.logInit = [];
    }

    async findOne(username, password) {
        const pass = new Verify();
        this.logInit = await Model.findOne({username: username})
        if(this.logInit === null){
            return false
        }
        const isValid = await pass.verifyPassword(this.logInit.password, password);
        console.log(isValid);
        return isValid;
    }
}
module.exports = LoginInit;