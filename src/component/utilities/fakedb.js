const addToDb = id =>{
    // console.log(id)
    let cart = {id};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-time');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    
    localStorage.setItem('break-time', JSON.stringify(cart));
}

const getStoredCart = () => {
    let getStoredCartItem = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-time');
    if(storedCart){
        getStoredCartItem = JSON.parse(storedCart);
    }
    return getStoredCartItem;
}

export {addToDb, getStoredCart}