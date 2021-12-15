function getPriceWithDiscount(price, discount) {
    const baseMinusDiscount = 100 - discount;
    const priceWithDiscount = (price * (baseMinusDiscount) / 100);
    
    return priceWithDiscount;
}

function userPriceWithDiscount() {
    const inputPrice = document.getElementById("input-price");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("input-discount");
    const discountValue = inputDiscount.value;

    const userDiscount = getPriceWithDiscount(priceValue, discountValue);
    const userResult = document.getElementById("user-price");
    userResult.innerText = `El precio con descuento es: $${userDiscount}`;
}

console.log({
    basePrice,
    currentDiscount,
    baseMinusDiscount,
    priceWithDiscount
})
