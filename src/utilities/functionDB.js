// add to Local Storage 
const addToDb = (id) => {
    // localStorage.setItem('shop-cart', JSON.stringify(id))
    let shopCart = {}
    const storedCart = localStorage.getItem('shop-cart')
    if (storedCart) {
        shopCart = JSON.parse(storedCart)
    }

    if (!shopCart[id]) {
        shopCart[id] = 1
    } else {
        shopCart[id]++
    }
    localStorage.setItem('shop-cart', JSON.stringify(shopCart))

}

export {
    addToDb,
}