function makeId(id){
    return document.getElementById(id);
}

function numberString(id){
    return Number(document.getElementById(id).innerText)
}

function innerId(id, value){
    let a = document.getElementById(id).innerText = value
    return a
}

makeId('coupon-btn').addEventListener('click', function(){

    const coupon = makeId('coupon-value');
    let couponValue = coupon.value
    // console.log(couponValue);

    let discount = 0;
    if(couponValue.trim() === 'SELL200'){
        discount = numberString('total-price') * 20 / 100;
        coupon.value = ''

        let discountText = innerId('discount-text', discount)
        let discountPrice = numberString('total-price') - discountText;

        innerId('total', discountPrice)
    }else{
        alert('Not match your coupon')
    }

})


const productsBtn = document.getElementsByClassName('products-btn')
for(let productBtn of productsBtn){
   
    productBtn.addEventListener('click', function productFunction(event){
        const price = Number(event.target.parentNode.parentNode.children[2].children[0].innerText);
        // console.log(price);
        // console.log(makeId('total-price').innerText);

        
        let totalPrice = numberString('total-price')
        // console.log(totalPrice, price);
        let totalPriceInner = totalPrice + price;
        innerId('total-price', totalPriceInner) 
        
        let discountPrice = totalPriceInner -  numberString('discount-text');
        innerId('total', discountPrice)


        const title = event.target.parentNode.parentNode.children[1].innerText;

        const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText
        
        const imgSrc = event.target.parentNode.parentNode.parentNode.children[0].children[0].src
        
        const list = document.createElement('li');
        list.innerHTML = `
            <div class="flex items-center justify-between bg-[#F4F1F1] rounded-md py-2 mb-4">
                  <img src="${imgSrc}" class="w-12" alt="">
                  <div>
                    <h5>${title}</h5>
                    <p>${productPrice} Tk</p>
                  </div>
            </div>
        `

        makeId('product-cart').appendChild(list)
    })
}

const promoCopy = makeId('copy-promo')
promoCopy.addEventListener('click', function(){
    const text = promoCopy.innerText
    navigator.clipboard.writeText(text)
})

makeId('purchase').addEventListener('click', ()=>{
    if(numberString('total-price') > 0){
        alert('your purchase complete')
    }
    makeId('total-price').innerText = '00'
    makeId('product-cart').innerHTML = ''
    makeId('discount-text').innerText = '00'
    makeId('total').innerText = '00'
})