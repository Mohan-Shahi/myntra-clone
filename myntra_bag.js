import { in_bag_items, onload, product_list } from "./mintra.js";


onload();


console.log(in_bag_items)

// let display_selected_item = ()=>{
//     let content_display = document.querySelector('.content')

//     let newhtml = '';
//     bag_item_object.forEach(item =>{
//             newhtml +=`
//                 <div class="card">
//                    <div class="img-content">
//                        <img src="" alt="">
//                    </div>
                   
//                    <div class="other-content">
//                        <h5 id="ratting">⭐ | </h5>
//                        <h3 id="name"></h3>
//                        <p id="name-ref"></p>
//                        <h4 id="price">Rs </h4>
//                        <div style="display:flex; gap:20px; font-size:20px;">
//                        <div class="add" data-index="">+</div>
//                        <p class="qty">${item.quantity}</p>
//                        <div class="sub" data-index="">-</div>
//                        </div>
//                    </div>
//                    <div class="close">
//                            <span class="delete" data-index=""> X </span>
//                    </div>
//                </div>
//            `
//         })     
//     content_display.innerHTML = newhtml;
// }
// display_selected_item();




