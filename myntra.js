const search = document.getElementById('search')
const search_icon = document.getElementById('search-icon')

search.addEventListener('focus',()=>{
    search_icon.style.color = 'blue'
})

search.addEventListener('blur', () => {
    search_icon.style.color = 'black' 
})

export let product_list = [
    {
        Id:'001',
        name:`Lilly Pulitzer`,
        nameRef:`Women's Resort Wear,Dresses...`,
        price:1000,
        rate:4.5,
        img:`dress.webp`,
        personToRate:120,
        discount:5,
        quantity_of_product:6,
        quantity:1
    },
    {
        Id:'002',
        name:`Twamev`,
        nameRef:`Men's Mix Classic and Conte...`,
        price:1000,
        rate:3,
        img:`How to Mix Classic and Contemporary Styles in Men's Festival Clothing_Blog 1.jpg`,
        personToRate:130,
        discount:12,
        quantity_of_product:6,
        quantity:1
    },
    {
        Id:'003',
        name:`Lilly Pulitzer`,
        nameRef:`Women's Resort Wear,Dresses...`,
        price:200,
        rate:4.5,
        img:`dress.webp`,
        personToRate:200,
        discount:10,
        quantity_of_product:6,
        quantity:1
    },
    {
        Id:'004',
        name:`Clothes`,
        nameRef:`Men's Mix Classic and ....`,
        price:1000,
        rate:3,
        img:`How to Mix Classic and Contemporary Styles in Men's Festival Clothing_Blog 1.jpg`,
        personToRate:130,
        discount:5,
        quantity_of_product:6,
        quantity:1
    },
    {
        Id:'005',
        name:`Lilly Pulitzer`,
        nameRef:`Women's Resort Wear,Dresses...`,
        price:200,
        rate:4.5,
        img:`dress.webp`,
        personToRate:200,
        discount:5,
        quantity_of_product:6,
        quantity:1
    },
    {
        Id:'006',
        name:`Twamev`,
        nameRef:`Men's Mix Classic and Conte...`,
        price:1000,
        rate:3,
        img:`How to Mix Classic and Contemporary Styles in Men's Festival Clothing_Blog 1.jpg`,
        personToRate:130,
        discount:4,
        quantity_of_product:7,
        quantity:1
    },
    {
        Id:'007',
        name:`Lilly Pulitzer`,
        nameRef:`Women's Resort Wear,Dresses...`,
        price:200,
        rate:4.5,
        img:`dress.webp`,
        personToRate:200,
        discount : 2,
        quantity_of_product:8,
        quantity:1
    },
]


export let in_bag_items = JSON.parse(localStorage.getItem('in_bag_items'))||[]
let to_display_product = document.querySelector('.body-contain')


let display_product = ()=>{
    let i=0;

    if (!to_display_product) {
        return;
    }
    let newHtml = '';
    for(i=0;i<product_list.length;i++){
        if(product_list[i].discount>0){
            newHtml+= `
                       <div class="card">
                               <img src="${product_list[i].img}" alt="">
                               
                               <h5 id="ratting">${product_list[i].rate}⭐ | ${product_list[i].personToRate}</h5>
                               <h3 id="name">${product_list[i].name}</h3>
                               <p id="name-ref">${product_list[i].nameRef}</p>
                               <div class="price-contain" style="display:flex; flex-direction:row; width:100%; margin-left:0px;">
                                   <span id="current-price">Rs ${product_list[i].price-((product_list[i].discount*product_list[i].price)/100)} </span> 
                                   <span id="price" style="text-decoration: line-through;color: gray;font-size:12px;" >Rs ${product_list[i].price}</span>
                                   <span id="discount">(${product_list[i].discount}% off)</span>           
                               </div>
                               <button id="addbtn" data-index="${i}">Add to bag</button>
                               <!--<button id="addwish"> Add To wish list</button> -->
                       </div>
                       `
        }
        else{
            newHtml+= `
                       <div class="card">
                               <img src="${product_list[i].img}" alt="">
                               
                               <h5 id="ratting">${product_list[i].rate}⭐ | ${product_list[i].personToRate}</h5>
                               <h3 id="name">${product_list[i].name}</h3>
                               <p id="name-ref">${product_list[i].nameRef}</p>
                               <div class="price-contain" style="display:flex; flex-direction:row; width:100%; margin-left:0px;">
                                   <span id="current-price">Rs ${product_list[i].price} </span>
                                   <span id="discount"> Aparentlly no dicount</span> 
                               </div>
                               <button id="addbtn" data-index="${i}">Add to bag</button>
                               <!--<button id="addwish"> Add To wish list</button> -->
                       </div>
                       `
        }
            
    }   

    to_display_product.innerHTML = newHtml;
};

export let item_object_count = JSON.parse(localStorage.getItem('count')) || [];



export let add_items = ()=>{
    let add_btn = document.querySelectorAll('#addbtn')
    add_btn.forEach(btn => {
        btn.addEventListener('click',()=>{
            let index = btn.dataset.index;
            let already_exist = in_bag_items.some(item =>
                item.Id == product_list[index].Id 
            )
            if(already_exist){
               
                
                let exist = in_bag_items.find(item =>
                item.Id == product_list[index].Id
                ) 
                if(product_list[index].quantity_of_product==exist.quantity){
                    console.log("full");
                }else{
                    exist.quantity+=1 
                    item_object_count.push(product_list[index].Id)
                }               
                
            }
            else{
                item_object_count.push(product_list[index].Id)
                in_bag_items.push(product_list[index])
                console.log(product_list[index].quantity_of_product)      
            }
            localStorage.setItem('count',JSON.stringify(item_object_count))
            localStorage.setItem('in_bag_items',JSON.stringify(in_bag_items))
            count_number_display();       
            display_message_function();
        })   
    });
}


export let count_number_display = ()=>{
    let display_count = document.querySelector('.number2')
    if(item_object_count.length>0){
        display_count.style.visibility = 'visible';
        display_count.innerHTML = `<p>${item_object_count.length
        }</p>`;
    }
    else{
        display_count.style.visibility = 'hidden'
    }
}


let display_message_function = ()=>{
    let display_message = document.querySelector('.display_message')
    setTimeout(() => {
        display_message.style.display = 'flex';
        setTimeout(() =>{
            display_message.style.display = 'none'
        },2000)
    });
   
}
export let onload = ()=>{
    display_product();
    add_items();
    count_number_display(); 
}
onload();

// console.log(in_bag_items)
// localStorage.clear()

// localStorage.clear()
console.log(in_bag_items)