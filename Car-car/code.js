"use strict";

let cars = [
  {
    name: "Volkswagen Polo",
    mark: "Volkswagen",
    type: "VerySpeed",
    korobka: "Mechanika",
    image: "img/polo.png",
    price: "1 000 000 ₽ ",
    rating: "100",
    id: "1"
  },
  {
    name: "Mercedes Mclaren",
    mark: "Mercedes",
    type: "VeryNotSpeed",
    korobka: "Avtomat",
    image: "img/big.png",
    price: "30 000 000 ₽ ",
    rating: "1",
    id: "2"
  },
  {
    name: "Audi R8",
    mark: "Audi",
    type: "Speed",
    korobka: "Avtomat",
    image: "img/audi_r8.jpg",
    price: "16 000 000 ₽ ",
    rating: "1",
    id: "3"
  },
  {
    name: "Chevrolet Camaro",
    mark: "Chevrolet",
    type: "Speed",
    korobka: "Mechanika",
    image: "img/Chevrolet.png",
    price: "5 000 000 ₽ ",
    rating: "5",
    id: "4"
  },
  {
    name: "Toyota Hilux",
    mark: "Toyota",
    type: "Speed",
    korobka: "Avtomat",
    image: "img/toyota_hilux.png",
    price: "6 000 000 ₽ ",
    rating: "18",
    id: "5"
  },
  {
    name: "Ferrari SF90",
    mark: "Ferrari",
    type: "VeryNotSpeed",
    korobka: "Avtomat",
    image: "img/Ferrari_SF90.png",
    price: "50 000 000 ₽ ",
    rating: "74",
    id: "6"
  },
];

function all_product() {   
    let content = document.querySelector("#content");

    for (let key of cars) {      
        content.innerHTML += `<div id="card" data-rating=${key.rating} data-price=${key.price}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</p><br><p id="card_rating">${key.rating}</p></div><div id="card_right"><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
    }
    korzina();
};

window.addEventListener("load", all_product);

let bfil = document.querySelector("#bfil");
bfil.addEventListener("click", select_type);

function select_product() {   
    content.innerHTML = "";
    let checkboxes = document.querySelectorAll("input[name=flist]:checked");

    let pr = [];

    checkboxes.forEach(function(elem){
        pr.push(elem.value);
    });
    
    let a = 0;  
    let i = 0;
    while(i < 15){        
        if (document.querySelectorAll(".custom-checkbox")[i].checked) {
        a+=1
        i+=20                            
        } else { 
                       
        }
        i+=1;
        console.log(a);  
    }

    if (a == 1){
    for (const product of pr) {        
            for (let key of cars) { 

                let card = `<div id="card" data-rating=${key.rating} data-price=${key.price}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}<br><p id="card_rating">${key.rating}</p></div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;

                if(product == key.mark) {               
                   content.innerHTML += card;                                             
                }
                if(product == key.type) {               
                    content.innerHTML += card;                                             
                 }
                 if(product == key.korobka) {               
                    content.innerHTML += card;                                             
                 }                  
        }        
    }
} else{
    all_product();
}   
    return pr;    
};
function select_type(){

    let ty = [];
    let pr = select_product();
};


function korzina() {       
    let list_korzina = [];    
    document.onclick = event => {
        if (event.target.classList.contains('btnbuy')){                 
            list_korzina.push(event.target.dataset.pr);     
            let blkbsk = document.querySelector("#blkbsk");
            let summa = document.querySelector("#itog_sum");  
            blkbsk.innerHTML ="";
            summa = "";   
                for (const product of list_korzina) {        
                    for (let key of cars) {             
                        let card = `<div id="card_cart" data-rating=${key.rating} data-price=${key.price}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
            
                        if(product == key.id) {               
                        blkbsk.innerHTML += card;
                        summa += key.price;                                           
                        }
                    }
                }         
                console.log(list_korzina);
            
        }
    }    
};


document.querySelector('#sort-vzr').onclick = function (){
    vsort('data-price');
};
document.querySelector('#sort-ubv').onclick = function (){
    usort('data-price');
};
document.querySelector('#sort-rating').onclick = function (){
    usort('data-rating');
};

function insertAfter(newNode, existingNode){
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);};

    function vsort(sortType){
    let ch1, ch2;
    let replacedNode;
    let nav = document.querySelector('#content');    
        for (let i = 0; i < nav.children.length; i++){
            for(let j = i+1; j < nav.children.length; j++){
                ch1 = Number(nav.children[i].getAttribute(sortType));
                ch2 = Number(nav.children[j].getAttribute(sortType));
                if(ch1 > ch2){
                    replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                    insertAfter(replacedNode, nav.children[i]);
                };
            };
        };
};

function usort(sortType){
    let ch1, ch2;
    let replacedNode;
    let nav = document.querySelector('#content');    
        for (let i = 0; i < nav.children.length; i++){
            for(let j = i+1; j < nav.children.length; j++){
                ch1 = Number(nav.children[i].getAttribute(sortType));
                ch2 = Number(nav.children[j].getAttribute(sortType));
                if(ch1 < ch2){
                    replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                    insertAfter(replacedNode, nav.children[i]);
                };
            };
        };
};


