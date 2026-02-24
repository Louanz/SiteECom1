import { PanierItem } from "./PanierItem.js";

export class Panier {
    constructor() {
        this.items = [];
    }

    ajouter(produit) {
        const item = this.items.find(i => i.produit.id === produit.id);
        if (item) item.quantite++;
        else this.items.push(new PanierItem(produit));
    }

    supprimer(idProduit) {
        const item = this.items.find(i => i.produit.id === idProduit);
        if (!item) return;

        if (item.quantite > 1) item.quantite--;
        else this.items = this.items.filter(i => i.produit.id !== idProduit);
    }

    getTotal() {
        return this.items.reduce((t, i) => t + i.getTotal(), 0);
    }
}
