const dev = "http://localhost:5500/api/v1/static/";
const prod = "https://miquelortiz7e4.alwaysdata.net/api/v1/static/";

//REQUEST CONST
const requestPage = new XMLHttpRequest(); user
const requestLogIn = new XMLHttpRequest();

function FetchDataLogInUser(url_api, callback){
    requestLogIn.open('GET',url_api, true);
    requestLogIn.onreadystatechange = function (event){
        if(requestLogIn.readyState === 4){
            if(requestLogIn.status === 200){
                callback(null, JSON.parse(requestLogIn.responseText))
            }else{
                const error = new Error("Error "+ url_api);
                return callback(error, null)
            }
        }
    }
    requestLogIn.send();
}
function LogIn(){
    FetchDataLogInUser(prod+"addUser", function (error, data){
        console.log(data);
        if(error) console.log(error);
        else{
            let user = document.getElementById("nombreUsuario").value;
            let password = document.getElementById("passwordUsuario").value;


            for (let i = 0; i < data.userList.length ; i++) {
                if(user === data.userList[i].username){
                    console.log("El usuario existe");
                    console.log("Password coincide");
                    window.location.replace(prod+"html/AddProduct.html")

                }else{
                    console.log("El usuario no existe");
                }
            }
        }
    })
}
function fetchData(url_api, callback){
     // const xhttp = new XMLHttpRequest();
      requestPage.open('GET', url_api, true);
        requestPage.onreadystatechange = function (event){
        if(requestPage.readyState === 4){
            if(requestPage.status === 200){
                callback(null, JSON.parse(requestPage.responseText))
            }else{
                const error = new Error("Error "+ url_api);
                return callback(error, null)
            }
        }
    }
    requestPage.send();
}
function onloadAllProducts() {
    fetchData(prod+"mainPage", function (error, data) {
        if (error) return console.log(error);
        else {
            console.log(data.allProducts)
            let idMan = 0;
            let idWoman = 0;
            let idKid = 0;
            for (let i = 0; i < data.allProducts.length; i++) {
                if (data.allProducts[i].gender === 'man') {
                    let cardContainer = document.getElementsByClassName("cards-containerMan");

                    let divItem = document.createElement("div");
                    divItem.setAttribute("class", "item");
                    divItem.setAttribute("id", idMan.toString());
                    divItem.setAttribute("onclick", "addId(this.id,'man')");

                    cardContainer[0].appendChild(divItem);

                    let href = document.createElement("a");
                    href.setAttribute("href", prod+"html/detail.html");
                    divItem.append(href);

                    let image = document.createElement("img");
                    image.setAttribute("id", "productImage" + i);
                    image.setAttribute("src", "/api/v1/static/uploads/" + data.allProducts[i].file)
                    href.append(image);

                    let h4 = document.createElement("h4");
                    h4.setAttribute("id", "productName" + i);
                    h4.append(data.allProducts[i].product);
                    href.append(h4);

                    let p1 = document.createElement("p");
                    p1.setAttribute("id", "descriptionProduct" + i);
                    p1.append(data.allProducts[i].description);
                    href.append(p1);

                    let p2 = document.createElement("p");
                    p2.setAttribute("id", "priceProduct" + i);
                    p2.append(data.allProducts[i].price);
                    href.append(p2);
                    idMan++;
                }
                if (data.allProducts[i].gender === 'woman') {
                    let cardContainer = document.getElementsByClassName("cards-containerWomen");

                    let divItem = document.createElement("div");
                    divItem.setAttribute("class", "item");
                    divItem.setAttribute("id", idWoman.toString());
                    divItem.setAttribute("onclick", "addId(this.id,'woman')");

                    cardContainer[0].appendChild(divItem);

                    let href = document.createElement("a");
                    href.setAttribute("href", prod+"html/detail.html");
                    href.setAttribute("id", i.toString());
                    divItem.append(href);

                    let image = document.createElement("img");
                    image.setAttribute("id", "wproductImage" + i);
                    image.setAttribute("src", "/api/v1/static/uploads/" + data.allProducts[i].file)
                    href.append(image);

                    let h4 = document.createElement("h4");
                    h4.setAttribute("id", "wproductName" + i);
                    h4.append(data.allProducts[i].product);
                    href.append(h4);

                    let p1 = document.createElement("p");
                    p1.setAttribute("id", "wdescriptionProduct" + i);
                    p1.append(data.allProducts[i].description);
                    href.append(p1);

                    let p2 = document.createElement("p");
                    p2.setAttribute("id", "wpriceProduct" + i);
                    p2.append(data.allProducts[i].price);
                    href.append(p2);
                    idWoman++;
                }
                if (data.allProducts[i].gender === 'kid') {
                    let cardContainer = document.getElementsByClassName("cards-containerKid");

                    let divItem = document.createElement("div");
                    divItem.setAttribute("class", "item");
                    divItem.setAttribute("id", idKid.toString());
                    divItem.setAttribute("onclick", "addId(this.id,'kid')");

                    cardContainer[0].appendChild(divItem);

                    let href = document.createElement("a");
                    href.setAttribute("href", prod+"html/detail.html");
                    href.setAttribute("id", i.toString());
                    divItem.append(href);

                    let image = document.createElement("img");
                    image.setAttribute("id", "kproductImage" + i);
                    image.setAttribute("src", "/api/v1/static/uploads/" + data.allProducts[i].file)
                    href.append(image);

                    let h4 = document.createElement("h4");
                    h4.setAttribute("id", "kproductName" + i);
                    h4.append(data.allProducts[i].product);
                    href.append(h4);

                    let p1 = document.createElement("p");
                    p1.setAttribute("id", "kdescriptionProduct" + i);
                    p1.append(data.allProducts[i].description);
                    href.append(p1);

                    let p2 = document.createElement("p");
                    p2.setAttribute("id", "kpriceProduct" + i);
                    p2.append(data.allProducts[i].price);
                    href.append(p2);
                    idKid++;
                }

            }
        }
    })
}
function onloadBodyMan(){
    fetchData(prod+"manPage", function (error, data){
        if(error) return console.log(error);
        else {
            for (let i = 0; i <data.manProducts.length ; i++) {
            let cardContainer = document.getElementsByClassName("cards-containerMan");

            let divItem = document.createElement("div");
            divItem.setAttribute("class", "item");
            divItem.setAttribute("id", i.toString());
            divItem.setAttribute("onclick", "addId(this.id,'man')");

            cardContainer[0].appendChild(divItem);

            let href = document.createElement("a");
            href.setAttribute("href", prod+"html/detail.html");
            divItem.append(href);

            let image = document.createElement("img");
            image.setAttribute("id", "productImage" + i);
            image.setAttribute("src","/api/v1/static/uploads/"+data.manProducts[i].file)
                href.append(image);

            let h4 = document.createElement("h4");
            h4.setAttribute("id", "productName" + i);
            h4.append(data.manProducts[i].product);
                href.append(h4);

            let p1 = document.createElement("p");
            p1.setAttribute("id", "descriptionProduct" + i);
            p1.append(data.manProducts[i].description);
                href.append(p1);

            let p2 = document.createElement("p");
            p2.setAttribute("id", "priceProduct" + i);
            p2.append(data.manProducts[i].price);
                href.append(p2);
        }
        }
    })
}

function onloadBodyWoman(){
    fetchData(prod+"womanPage", function (error, data){
        console.log(data);
        if(error) return console.log(error);
        else{
            for (let i = 0; i < data.womanProducts.length ; i++) {
                let cardContainer = document.getElementsByClassName("cards-containerWomen");

                let divItem = document.createElement("div");
                divItem.setAttribute("class", "item");
                divItem.setAttribute("id", i.toString());
                divItem.setAttribute("onclick", "addId(this.id,'woman')");

                cardContainer[0].appendChild(divItem);

                let href = document.createElement("a");
                href.setAttribute("href", prod+"html/detail.html");
                divItem.append(href);

                let image = document.createElement("img");
                image.setAttribute("id", "wproductImage" + i);
                image.setAttribute("src","/api/v1/static/uploads/"+data.womanProducts[i].file)
                href.append(image);

                let h4 = document.createElement("h4");
                h4.setAttribute("id", "wproductName" + i);
                h4.append(data.womanProducts[i].product);
                href.append(h4);

                let p1 = document.createElement("p");
                p1.setAttribute("id", "wdescriptionProduct" + i);
                p1.append(data.womanProducts[i].description);
                href.append(p1);

                let p2 = document.createElement("p");
                p2.setAttribute("id", "wpriceProduct" + i);
                p2.append(data.womanProducts[i].price);
                href.append(p2);

            }
        }
    })
}

function onloadBodyKid(){
    fetchData(prod+"kidsPage", function (error, data){
        if(error) return console.log(error);
        else{
            for (let i = 0; i < data.kidsProducts.length; i++) {
                let cardContainer = document.getElementsByClassName("cards-containerKid");

                let divItem = document.createElement("div");
                divItem.setAttribute("class", "item");
                divItem.setAttribute("id", i.toString());
                divItem.setAttribute("onclick", "addId(this.id,'kid')");
                cardContainer[0].appendChild(divItem);

                let href = document.createElement("a");
                href.setAttribute("href", prod+"html/detail.html");
                // href.setAttribute("id",i.toString());
                divItem.append(href);

                let image = document.createElement("img");
                image.setAttribute("id", "kproductImage" + i);
                image.setAttribute("src","/api/v1/static/uploads/"+data.kidsProducts[i].file)
                href.append(image);

                let h4 = document.createElement("h4");
                h4.setAttribute("id", "kproductName" + i);
                h4.append(data.kidsProducts[i].product);
                href.append(h4);

                let p1 = document.createElement("p");
                p1.setAttribute("id", "kdescriptionProduct" + i);
                p1.append(data.kidsProducts[i].description);
                href.append(p1);

                let p2 = document.createElement("p");
                p2.setAttribute("id", "kpriceProduct" + i);
                p2.append(data.kidsProducts[i].price);
                href.append(p2);

            }
        }
    })
}

function addId(id, gender){
    fetch(prod+"id",{
        method:'POST',
        body:JSON.stringify({
            identificador: id.toString(),
            gender: gender.toString()
        }),
        headers:{
            'Content-type': 'application/json'
        }
    })
}

function getDetailItem(){
    fetchData(prod+"id",function(error, data){
        if(error) return console.log(error);
        else{
            const id = parseInt(data.idProduct[0].identificador);
            const gender = data.idProduct[0].gender
            console.log(id);
            console.log(gender);
            switch(gender){
                case 'man':
                    fetchData(prod+"manPage",function(error,data){
                        if(error) return console.log(error);
                        else{
                            for (let i = 0; i < data.manProducts.length ; i++) {
                                if(id === i){
                                   const itemCardDetail = document.getElementsByClassName("itemCardDetail");

                                   let image = document.createElement("img");
                                   image.setAttribute("id","detailImage");
                                   image.setAttribute("src",prod+"uploads/"+data.manProducts[i].file);
                                   itemCardDetail[0].appendChild(image);

                                   const box2 = document.getElementsByClassName("box2");

                                    let id = document.createElement("p");
                                    id.setAttribute("id","idDelete");
                                    id.append(data.manProducts[i]._id);
                                    box2[0].append(id);


                                   let h2 = document.createElement("h2");
                                   h2.append(data.manProducts[i].product);
                                   box2[0].appendChild(h2);

                                   let p1 = document.createElement("p");
                                   p1.append(data.manProducts[i].description);
                                   box2[0].append(p1);

                                   let divPrecio = document.createElement("div");
                                   divPrecio.setAttribute("class","precio");
                                   box2[0].append(divPrecio);

                                   let h4 = document.createElement("h4");
                                   h4.append("Precio: ");
                                   divPrecio.appendChild(h4);

                                   let pPrice = document.createElement("p");
                                   pPrice.append(data.manProducts[i].price);
                                   divPrecio.append(pPrice);

                                   const box3 = document.getElementsByClassName("ulBox3");

                                   let li1 = document.createElement("li");
                                   li1.append(data.manProducts[i].user)
                                    box3[0].appendChild(li1);

                                   let li2 = document.createElement("li");
                                   li2.append(data.manProducts[i].email);
                                   box3[0].append(li2);

                                   let eliminar = document.createElement("img")
                                   eliminar.setAttribute("id","eliminarIcon");
                                   eliminar.setAttribute("src","../resources/eliminar.png")
                                    eliminar.setAttribute("onclick","deleteProduct()");
                                    box3[0].append(eliminar);
                                }
                            }
                        }
                    })
                    break;
                case 'woman':
                    fetchData(prod+"womanPage",function(error,data){
                        if(error) return console.log(error);
                        else{
                            console.log("fetching woman data");
                            for (let i = 0; i < data.womanProducts.length ; i++) {
                                if(id === i){
                                    const itemCardDetail = document.getElementsByClassName("itemCardDetail");

                                    let image = document.createElement("img");
                                    image.setAttribute("id","detailImage");
                                    image.setAttribute("src",prod+"uploads/"+data.womanProducts[i].file);
                                    itemCardDetail[0].appendChild(image);

                                    const box2 = document.getElementsByClassName("box2");

                                    let id = document.createElement("p");
                                    id.setAttribute("id","idDelete");
                                    id.append(data.womanProducts[i]._id);
                                    box2[0].append(id);

                                    let h2 = document.createElement("h2");
                                    h2.append(data.womanProducts[i].product);
                                    box2[0].appendChild(h2);

                                    let p1 = document.createElement("p");
                                    p1.append(data.womanProducts[i].description);
                                    box2[0].append(p1);

                                    let divPrecio = document.createElement("div");
                                    divPrecio.setAttribute("class","precio");
                                    box2[0].append(divPrecio);

                                    let h4 = document.createElement("h4");
                                    h4.append("Precio: ");
                                    divPrecio.appendChild(h4);

                                    let pPrice = document.createElement("p");
                                    pPrice.append(data.womanProducts[i].price);
                                    divPrecio.append(pPrice);

                                    const box3 = document.getElementsByClassName("ulBox3");

                                    let li1 = document.createElement("li");
                                    li1.append(data.womanProducts[i].user)
                                    box3[0].appendChild(li1);

                                    let li2 = document.createElement("li");
                                    li2.append(data.womanProducts[i].email);
                                    box3[0].append(li2);

                                    let eliminar = document.createElement("img")
                                    eliminar.setAttribute("id","eliminarIcon");
                                    eliminar.setAttribute("src","../resources/eliminar.png")
                                    eliminar.setAttribute("onclick","deleteProduct()");
                                    box3[0].append(eliminar);
                                }
                            }
                        }
                    })
                    break;
                case 'kid':
                    fetchData(prod+"kidsPage",function(error,data){
                        if(error) return console.log(error);
                        else{
                            console.log("fetching kids data");
                            for (let i = 0; i < data.kidsProducts.length ; i++) {
                                if(id === i){
                                    const itemCardDetail = document.getElementsByClassName("itemCardDetail");

                                    let image = document.createElement("img");
                                    image.setAttribute("id","detailImage");
                                    image.setAttribute("src",prod+"uploads/"+data.kidsProducts[i].file);
                                    itemCardDetail[0].appendChild(image);

                                    const box2 = document.getElementsByClassName("box2");

                                    let id = document.createElement("p");
                                    id.setAttribute("id","idDelete")
                                    id.append(data.kidsProducts[i]._id);
                                    box2[0].append(id);

                                    let h2 = document.createElement("h2");
                                    h2.append(data.kidsProducts[i].product);
                                    box2[0].appendChild(h2);

                                    let p1 = document.createElement("p");
                                    p1.append(data.kidsProducts[i].description);
                                    box2[0].append(p1);

                                    let divPrecio = document.createElement("div");
                                    divPrecio.setAttribute("class","precio");
                                    box2[0].append(divPrecio);

                                    let h4 = document.createElement("h4");
                                    h4.append("Precio: ");
                                    divPrecio.appendChild(h4);

                                    let pPrice = document.createElement("p");
                                    pPrice.append(data.kidsProducts[i].price);
                                    divPrecio.append(pPrice);

                                    const box3 = document.getElementsByClassName("ulBox3");

                                    let li1 = document.createElement("li");
                                    li1.append(data.kidsProducts[i].user)
                                    box3[0].appendChild(li1);

                                    let li2 = document.createElement("li");
                                    li2.append(data.kidsProducts[i].email);
                                    box3[0].append(li2);

                                    let eliminar = document.createElement("img")
                                    eliminar.setAttribute("id","eliminarIcon");
                                    eliminar.setAttribute("src","../resources/eliminar.png")
                                    eliminar.setAttribute("onclick","deleteProduct()");
                                    box3[0].append(eliminar);
                                }
                            }
                        }
                    })
                    break;
            }
        }
    })
}

function deleteProduct() {
    const id = document.getElementById("idDelete").innerHTML;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        _id: id
    });

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(prod+"mainPage/"+id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(window.location.replace(prod+"html/index.html"))
        .catch(error => console.log('error', error));
    }



