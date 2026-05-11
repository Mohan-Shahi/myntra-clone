import { in_bag_items, onload, product_list,count_number_display, item_object_count } from "./mintra.js";


const CONVINENCE_FEE = 99;

let display_selected_item = ()=>{
    let content_display = document.querySelector('.content')

    let newhtml = '';
    for(let i=0;i<in_bag_items.length;i++){
            newhtml +=`
                <div class="card">
                   <div class="img-content">
                       <img src="${in_bag_items[i].img}" alt="">
                   </div>
                   
                   <div class="other-content">
                       <h3 id="name">${in_bag_items[i].name}</h3>
                       <p id="name-ref">${in_bag_items[i].nameRef}</p>
                       <h4 id="price">Rs ${in_bag_items[i].price} </h4>
                       <div style="display:flex; gap:20px; font-size:20px;">
                       <div class="add" data-index="${i}">+</div>
                       <p class="qty">${in_bag_items[i].quantity}</p>
                       <div class="sub" data-index="${i}">-</div>
                       </div>
                   </div>
                   <div class="close">
                           <span class="delete" data-index="${i}"> X </span>
                   </div>
               </div>
           `
        }    
     
    content_display.innerHTML = newhtml;
}

let delete_item = ()=>{
    let delete_btn = document.querySelectorAll('.delete')
    let popup = document.querySelector('.popup')
    let btn_ok = document.querySelector('.btn_ok')
    let btn_cancle = document.querySelector('.btn_cancle')
    let index; 
    
    delete_btn.forEach(btn =>{
        btn.addEventListener('click',()=>{
            index = btn.dataset.index
            popup.style.display = 'flex'
        }) 
    })

    btn_ok.onclick = ()=>{  
        let deletedId = in_bag_items[index].Id
        let quantity = in_bag_items[index].quantity
        item_object_count.length-=quantity
        in_bag_items.splice(index,1)
        localStorage.setItem('count',JSON.stringify(item_object_count))
        localStorage.setItem('in_bag_items',JSON.stringify(in_bag_items))
        display_selected_item();
        delete_item() 
        count_number_display();        
        popup.style.display = 'none'
        quantity_add_subb() 
    }
    btn_cancle.onclick = ()=>{
        popup.style.display = 'none'
    }
    calculation()
   
}


let quantity_add_subb = ()=>{

    let add = document.querySelectorAll('.add')
    add.forEach(btn=>{
        btn.addEventListener('click',()=>{
            let i = btn.dataset.index
            in_bag_items[i].quantity+=1
            item_object_count.length+=1
            localStorage.setItem('count',JSON.stringify(item_object_count))
            localStorage.setItem('in_bag_items',JSON.stringify(in_bag_items))
            display_selected_item();
             
            count_number_display(); 
            quantity_add_subb();
        })
    })
    let sub = document.querySelectorAll('.sub')
    let popup = document.querySelector('.popup')

    sub.forEach(btn=>{
        btn.addEventListener('click',()=>{
            let i = btn.dataset.index
            if(in_bag_items[i].quantity>1){
                in_bag_items[i].quantity-=1
                item_object_count.length-=1
            }
            else{
                in_bag_items.splice(i,1)
                item_object_count.length -=1
            }
            localStorage.setItem('count',JSON.stringify(item_object_count))
                localStorage.setItem('in_bag_items',JSON.stringify(in_bag_items))
                display_selected_item();
                count_number_display(); 
                quantity_add_subb(); 
           
})
    })
     delete_item()
}

let calculation = ()=>{
    let total_quantity = 0; 
    let total_actual_amount = 0;
    let total_discount_amount = 0;
    let Amount_after_discount = 0;
    let total_items = 0;
    let calculation = document.querySelector('.calculation')
    if(in_bag_items.length<1){
        calculation.style.display = 'none'
        
    }
    else{
        for(let i=0;i<in_bag_items.length;i++){
        console.log((in_bag_items[i].price*in_bag_items[i].quantity)-((in_bag_items[i].discount*in_bag_items[i].price*in_bag_items[i].quantity)/100))
        total_quantity+=in_bag_items[i].quantity
        total_actual_amount +=in_bag_items[i].price*in_bag_items[i].quantity
        total_discount_amount +=((in_bag_items[i].discount*in_bag_items[i].price*in_bag_items[i].quantity)/100)
        }
        Amount_after_discount = total_actual_amount-total_discount_amount+CONVINENCE_FEE

        calculation.innerHTML = `
            <div class="calculation_card">
                <div class="items"> No of items+quantity (<p> ${total_quantity} </p>) </div>
                <div class="actual_amount"><h4>Price of Items :</h4> <p>Rs ${total_actual_amount}</p></div>
                <div class="discount_amount"><h4>Discount amount :</h4> <p>Rs ${total_discount_amount} </p></div>
                <div class="shipping_amount"><h4>Shipping amount :</h4> <p>Rs ${CONVINENCE_FEE}</p></div>
            </div>
            <div class="total_amount_card">
                <div class="total_amount"><h4>Total paying amount :</h4> <p>Rs ${Amount_after_discount}</p></div>
            </div>
        `
    }   
}


function all_onload(){
    onload();
    display_selected_item();
    delete_item();
    quantity_add_subb();
    calculation()
    display_calcualtion();
}
all_onload();







