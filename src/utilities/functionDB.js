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

// get data from Local Storage
const getDataFromDB = () => {
    const localStorageData = localStorage.getItem('shop-cart')
    let storedData = {};
    if (localStorageData) {
        storedData = JSON.parse(localStorageData)
    }
    return storedData
}

export {
    addToDb,
    getDataFromDB,
}