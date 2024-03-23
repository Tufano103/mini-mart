var cart =[]
function submit(){
    if(items.value ==""){
        alert('fill the empty spaces')
    }else{
        alert('item added to cart, continue adding items to cart')
        cart.push(items.value)
        console.log(cart)
    document.getElementById('items').value=''
    displayItem()
    }        
    noitems.style.display ='none'
    row.style.display='block'
}
function delLast() {
    cart.pop()
    console.log(cart);
    displayItem()
}
function delFirst(){
    cart.shift()
    displayItem()
    console.log(cart)
}
function addFirst(){
    var add =prompt('which item are you adding')
    cart.unshift(add)
    displayItem()
}
function delAny(){
    var add = Number (prompt('which item are you deleting?'))
    cart.splice(add-1, 1)
    displayItem()
}
function editAny(){
    var add = Number (prompt('input item to edit'))
    var newItem =  (prompt('add new item'))
    cart.splice(add-1, 1, newItem)
    displayItem()
}

 function delAll(){
    var con =confirm('are you sure you want to continue, this action is irreversible?')
    if(con ===true){
        cart.splice(0, cart.length)
        displayItem()
    } else{
       alert('kindly return to mainpage') 
    }
   
 }
function displayItem(){
    show.innerhtml =""
    show.innerHTML = ''
    for (var i = 0; i < cart.length; i++) {
        // console.log(cart[i])
        show.innerHTML += `
                        <small>${i + 1}</small>
                        <p>${cart[i]}</p>
                    `
    }
}