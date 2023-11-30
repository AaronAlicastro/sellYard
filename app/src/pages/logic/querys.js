export default class Querys {
    constructor() {
        this.URL_API = "https://fakestoreapi.com";
        this.cartProductsAdded = [];
    }
    
    // inside functions
    addProductToCart(product) {
        this.cartProductsAdded.push(product);
    }


    // querys to the api
    async getAllCategories(fun) {
        let pt = await fetch(this.URL_API + "/products/categories", {
            method: "GET",
            mode: "cors"
        });
        pt.json().then(r => fun(r));
    }

    async getOneCategory(category, fun) {
        let pt = await fetch(this.URL_API + "/products/category/" + category, {
            method: "GET",
            mode: "cors"
        });
        pt.json().then(r => fun(r));
    }

    async getAllProducts(fun) {
        let pt = await fetch(this.URL_API + "/products", {
            method: "GET",
            mode: "cors"
        });
        pt.json().then(r => fun(r));
    }
}