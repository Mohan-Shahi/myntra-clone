const search = document.getElementById('search')
const search_icon = document.getElementById('search-icon')

search.addEventListener('focus',()=>{
    search_icon.style.color = 'blue'
})

search.addEventListener('blur', () => {
    search_icon.style.color = 'black' 
})