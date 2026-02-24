export class Commande {
    constructor(panier) {
        this.date = new Date();
        this.items = panier.items;
        this.total = panier.getTotal();
    }
}
