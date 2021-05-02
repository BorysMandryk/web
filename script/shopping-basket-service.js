export default class ShoppingBasketService 
{
    static async addProduct(id) {
        const productData =
        {
            med_id: id,
            amount: 1
        }
        const array = JSON.parse(localStorage.getItem("products"));
        if (array)
        {
            if (!array.some(product => product.id == productData.med_id))
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

    static removeProduct(id) {
        const productsArray = JSON.parse(localStorage.getItem("products"));
        console.log(productsArray);
        const removeIndex = productsArray.map(item => item.med_id).indexOf(id);
        productsArray.splice(removeIndex, 1);
        localStorage.setItem("products", JSON.stringify(productsArray));
    }

    static getAll() {
        return JSON.parse(localStorage.getItem("products"));
    }
}