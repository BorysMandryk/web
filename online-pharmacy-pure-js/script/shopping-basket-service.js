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
            if (!array.some(product => product.med_id == id))
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
        if (productsArray.length > 1) {
            const removeIndex = productsArray.map(item => item.med_id).indexOf(id);
            productsArray.splice(removeIndex, 1);
            localStorage.setItem("products", JSON.stringify(productsArray));
        }
        else {
            localStorage.removeItem("products");
        }
    }

    static removeAll() {
        localStorage.removeItem("products");
    }

    static getAll() {
        return JSON.parse(localStorage.getItem("products"));
    }
}