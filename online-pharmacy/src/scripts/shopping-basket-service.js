export function addProduct(id) {
    const productData =
    {
        med_id: id,
        amount: 1
    }
    const array = JSON.parse(localStorage.getItem("products"));
    if (array)
    {
        if (!array.some(product => product.med_id === id))
        {
            array.push(productData);
            localStorage.setItem("products", JSON.stringify(array))
        }
    } 
    else
    {
        localStorage.setItem("products", JSON.stringify([productData]));
    }
}

export function changeAmount(id, amount) {
    const productsArray = JSON.parse(localStorage.getItem("products"));
    const changeIndex = productsArray.findIndex(product => product.med_id === id);
    productsArray[changeIndex].amount = amount;
    localStorage.setItem("products", JSON.stringify(productsArray));
}

export function removeProduct(id) {
    const productsArray = JSON.parse(localStorage.getItem("products"));
    if (productsArray.length > 1) {
        const removeIndex = productsArray.map(item => item.med_id).indexOf(id);
        productsArray.splice(removeIndex, 1);
        localStorage.setItem("products", JSON.stringify(productsArray));
    }
    else {
        localStorage.removeItem("products");
    }
}

export function removeAll() {
    localStorage.removeItem("products");
}

export function getAll() {
    return JSON.parse(localStorage.getItem("products"));
}
