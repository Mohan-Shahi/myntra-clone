import { display_number_bag,in_bag_items } from "./mintra.js";

display_number_bag();


const quantity =  1;


let display_quantity = document.querySelectorAll('#display_quantity')


const content_display = document.querySelector('.content')

let display_items_in_bag = ()=>{
    content_display.innerHTML = '';

    for(let i=0;i<in_bag_items.length;i++){
        content_display.innerHTML += `
        <div class="card">
                <div class="img-content">
                    <img src="${in_bag_items[i].img}" alt="">
                </div>
                <div class="other-content">
                    <h5 id="ratting">${in_bag_items[i].rate}⭐ | ${in_bag_items[i].personToRate}</h5>
                    <h3 id="name">${in_bag_items[i].name}</h3>
                    <p id="name-ref">${in_bag_items[i].nameRef}</p>
                    <h4 id="price">Rs ${in_bag_items[i].price}</h4>
                    <div style="display:flex; gap:20px; font-size:20px;">
                    <p>+</p> <p id="display_quantity"> </p> <p>-</p>
                    </div>
                </div>
            </div>
        `;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    display_items_in_bag()
});



display_quantity.innerText = `${quantity}`;
