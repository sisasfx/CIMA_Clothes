const Model = require("../BBDD/modelUsers");
const Verify = require("../auth/pass-verify");

class usersLoginService{
    constructor() {
        this.userList = [];
    }

    async create(userName, userEmail, userPassword){
        return new Promise(async (resolve, reject) => {
            if (userName === null || userEmail === null | userPassword === null) {
                return reject("Faltan datos!")
            }
            else{
                const fullInfo = {
                    username: userName,
                    email: userEmail,
                    password: userPassword
                }
                console.log(userName)
                console.log(userEmail)
                console.log(userPassword)
                const pass = new Verify();
                fullInfo.password = await pass.hashPassword(fullInfo.password);

                console.log(fullInfo.password)

                this.userList.push(fullInfo);
                const myUser = new Model(fullInfo);
                return resolve(myUser.save())
            }
        })
    }

    async find(){
        this.userList = await Model.find();

        return this.userList;
    }

    async findOne(id){
        this.userList = await Model.findOne({id:id})
        return this.userList;
    }

    async update(id, changeName, changeEmail,changePassword){
        const pass = new Verify();

        const lista = await Model.find({id:id});
        lista[0].username = changeName;
        lista[0].email = changeEmail;
        const hashPassw = await pass.hashPassword(changePassword);
        console.log(hashPassw);
        lista[0].password = hashPassw;
        console.log(lista);
        this.userList = lista;

        const user = new Model(this.userList);
        await user.save();
        return this.userList;
    }

    async delete(id){
        await Model.deleteOne({id:id});
    }
}

module.exports = usersLoginService;