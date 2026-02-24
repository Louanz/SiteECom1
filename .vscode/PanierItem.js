export class PanierItem {
    constructor(produit, quantite = 1) {
        this.produit = produit;
        this.quantite = quantite;
    }

    getTotal() {
        return this.produit.prix * this.quantite;
    }
}
