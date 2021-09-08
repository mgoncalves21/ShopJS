//ALGO 1 Afficher liste de produits dynamique

//DATA + VISUALISATION

//A - Les données : Creer array de liste de produits (String)
// function initArrayProduct

//B - Vider le menu UL LI : fonction resetMenu()

//C - Bouclez sur la liste des produits (boucle for array) function addAllToMenu()

//D - Sur chaque produits, ajouté ELEMENT GRAPHIQUE addItemToMenu (param name)

//E - resetAndInitMenu() // resetMenu+ addAllToMenu

//-----------------------------------------------------------------------------------------------//


//A :

var arrayProduct = [];

function initArrayProduct(){
    arrayProduct.push("IntelliJ")
    arrayProduct.push("Rider")
    arrayProduct.push("WebStorm")
    arrayProduct.push("Visual")
    arrayProduct.push("PHPStorm")
    arrayProduct.push("Adobe")
}
initArrayProduct();

function resetMenu(){
    var ul = document.querySelector("ul");
    var lis = document.querySelectorAll("li");
    for (var i = 0; i<lis.length; i++){
        var liCurrent= lis[i];
        ul.removeChild(liCurrent)
    }
}


function addAllToMenu(){
    for(var i= 0; i<arrayProduct.length; i++){
        var produit = arrayProduct[i]
        console.log("produit", produit);
        addItemToMenu(produit)
    }
}


function addItemToMenu(name){
    var ul = document.querySelector("ul");
    var li = document.createElement("li")
    var a = document.createElement("a")
    a.textContent = name;
    a.setAttribute("href", "#");
    a.setAttribute('onmouseover', "setInput('"+name+"')");
    a.setAttribute('onclick', "addToCard('"+name+"')");
    li.appendChild(a);
    ul.appendChild(li)

}
function resetAndInitMenu(){
    resetMenu();
    addAllToMenu();
}
resetAndInitMenu();


//--------------------------------------------------------------------------------//

//ALGO 2 Ajout de produits au catalogue

// A Creer un champs input
//
// B creer un bouton avec EVENT onclick
//
// C sur event appeler fonction AddItem(name) (le nom vient du input)
//
// D Ajouter element dans le arrayDeProduit
//
// E call reserAndInitMenu
//
// F BONUS function checkDoublons (return un boolean true )

function addItem(){

    var nameProd = document.getElementById("prodInput").value;
    console.log(nameProd);
    if (checkDoublons(nameProd)){
        alert("Ce produit existe déjà")
    }
    else{
        arrayProduct.push(nameProd);
    }
    resetAndInitMenu();

}

function checkDoublons(produitAtester){

    var isDoublons = false;

    for (var i =0; i<arrayProduct.length; i++){
        var prod = arrayProduct[i];

        if (prod === produitAtester){
            isDoublons= true;
        }
    }
    return isDoublons;
}

//----------------------------------------------------------------------------------------------//

//ALGO 3 Supprimer un produit de l'inventaire

//A Ajouter bouton DELETE

//B Creer fonction DeleteItem(name)

//C Parcourir la liste de produits et supprimer si trouvé

//D BONUS mouseOver item menu SET INPUT

function deleteItem(){

    var nameProd = document.getElementById("prodInput").value;

    for (var i =0; i<arrayProduct.length; i++) {
        var prod = arrayProduct[i];
        if (prod === nameProd) {
            arrayProduct.splice(i, 1);
        }
    }
    resetAndInitMenu();
}
function setInput(name){
    console.log("setInput")
    document.getElementById("prodInput").value= name;
}

//--------------------------------------------------------------------------------------//

//ALGO PANIER AJOUTER ET VIDER

// A Creer un ARRAY qui correspont à notre panier
//
// B afficherTexte Panier
//
// C onclick sur les element du menu AddToCard(name)
//
// D Bouton VIDER PANIER
//
// E afficher le detail du panier (tous les produit )

var panierArray = [];

function afficherTexte(){
    if (panierArray.length>1){
        document.getElementById("panier").textContent = "Il y a " +panierArray.length+" produits au panier";
    }
else {
        document.getElementById("panier").textContent = "Il y a " + panierArray.length + " produit au panier";
    }
}



function addToCard(name){
    panierArray.push(name);
    afficherTexte();
    afficherDetail();

}
function viderPanier(){
   panierArray=[];
   afficherTexte();
   afficherDetail();
}

function afficherDetail(){
    var detail ="Détail du panier :";
    for(var i=0; i<panierArray.length;i++){
        detail = detail + " " + panierArray[i] + ",";
    }
    document.getElementById("listePanier").textContent = detail;
}