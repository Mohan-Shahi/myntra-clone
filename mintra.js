const search = document.getElementById('search')
const search_icon = document.getElementById('search-icon')

search.addEventListener('focus',()=>{
    search_icon.style.color = 'blue'
})

search.addEventListener('blur', () => {
    search_icon.style.color = 'black' 
})


const product_list = [
    {
        name:`Lilly Pulitzer`,
        nameRef:`Women's Resort Wear,Dresses...`,
        price:200,
        rate:4.5,
        img:`dress.webp`,
        personToRate:200
    },
    {
        name:`Twamev`,
        nameRef:`Men's Mix Classic and Conte...`,
        price:1000,
        rate:3,
        img:`How to Mix Classic and Contemporary Styles in Men's Festival Clothing_Blog 1.jpg`,
        personToRate:130
    },
    {
        name:`Lilly Pulitzer`,
        nameRef:`Women's Resort Wear,Dresses...`,
        price:200,
        rate:4.5,
        img:`dress.webp`,
        personToRate:200
    },
    {
        name:`Twamev`,
        nameRef:`Men's Mix Classic and Conte...`,
        price:1000,
        rate:3,
        img:`How to Mix Classic and Contemporary Styles in Men's Festival Clothing_Blog 1.jpg`,
        personToRate:130
    },
    {
        name:`Lilly Pulitzer`,
        nameRef:`Women's Resort Wear,Dresses...`,
        price:200,
        rate:4.5,
        img:`dress.webp`,
        personToRate:200
    },
    {
        name:`Twamev`,
        nameRef:`Men's Mix Classic and Conte...`,
        price:1000,
        rate:3,
        img:`How to Mix Classic and Contemporary Styles in Men's Festival Clothing_Blog 1.jpg`,
        personToRate:130
    },
    {
        name:`Lilly Pulitzer`,
        nameRef:`Women's Resort Wear,Dresses...`,
        price:200,
        rate:4.5,
        img:`dress.webp`,
        personToRate:200
    },
]


export const in_bag_items = JSON.parse(localStorage.getItem('in_bag_items'))||[]

const to_display_product = document.querySelector('.body-contain')


let display_product = ()=>{
    let i=0;

    if (!to_display_product) {
        console.error("body-contain not found");
        return;
    }
    to_display_product.innerHTML = '';
    for(i=0;i<product_list.length;i++){
        to_display_product.innerHTML += `
                    <div class="card">
                            <img src="${product_list[i].img}" alt="">
                            
                            <h5 id="ratting">${product_list[i].rate}⭐ | ${product_list[i].personToRate}</h5>
                            <h3 id="name">${product_list[i].name}</h3>
                            <p id="name-ref">${product_list[i].nameRef}</p>
                            <h4 id="price">Rs ${product_list[i].price}</h4>
                            <button id="addbtn" data-index="${i}">Add to bag</button>
                            <!--<button id="addwish"> Add To wish list</button> -->
                    </div>
                    `
    }
            
    display_number_bag();
        
};

       
export let display_number_bag = ()=>{
        let count_of_items =  JSON.parse(localStorage.getItem('count_of_items')) || 0;
  
        const bag_number1 = document.querySelector('.number_display')
        let add_btn = document.querySelectorAll('#addbtn')

        

        if(count_of_items>0){
            bag_number1.innerHTML=`<div class="number2">
                                <p id="number2">${count_of_items}</p>
                            </div>`

            add_btn.forEach(btn => {
            btn.addEventListener('click',()=>{
                const index = btn.dataset.index;
                const item = product_list[index];
                console.log(item);

                in_bag_items.push(item)
                localStorage.setItem('in_bag_items',JSON.stringify(in_bag_items))
                display_message_function();
                number_display_count();
            })
            let number_display_count = ()=>{
            count_of_items++;
            localStorage.setItem('count_of_items',JSON.stringify(count_of_items))
            bag_number1.innerHTML=`<div class="number2">
                                <p id="number2">${count_of_items}</p>
                            </div>`
        }
        });
        }
        else{

            add_btn.forEach(btn => {
                btn.addEventListener('click',()=>{
                    const index = btn.dataset.index;
                    const item = product_list[index];

                    
                    in_bag_items.push(item)
                    localStorage.setItem('in_bag_items',JSON.stringify(in_bag_items))

                    display_message_function();
                    number_display_count();
                })
                let number_display_count = ()=>{
                count_of_items++;
                localStorage.setItem('count_of_items',JSON.stringify(count_of_items))
                bag_number1.innerHTML=`<div class="number2">
                                    <p id="number2">${count_of_items}</p>
                                </div>`
            }
            });
        }
        console.log(count_of_items)
}


document.addEventListener("DOMContentLoaded", () => {
    display_product();
});

let display_message_function = ()=>{
    const display_message = document.querySelector('.display_message')
    setTimeout(() => {
        display_message.style.display = 'flex';
        setTimeout(() =>{
            display_message.style.display = 'none'
        },2000)
    });
   
}


console.log(in_bag_items)


