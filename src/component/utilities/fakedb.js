const addToDb = id =>{
    console.log(id)
    let cart = {id};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-time');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    
    localStorage.setItem('break-time', JSON.stringify(cart));
}

const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-time');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

export {addToDb, getStoredCart}