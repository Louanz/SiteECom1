import { Produit } from "../domain/Produit.js";
import { Panier } from "../domain/Panier.js";
import { PanierService } from "../services/PanierService.js";

export class PanierController {
    constructor() {
        this.panier = new Panier();
        this.service = new PanierService();

        this.produits = [
            new Produit(1, "Produit A", 10),
            new Produit(2, "Produit B", 20),
            new Produit(3, "Produit C", 30)
        ];
    }

    ajouter(id) {
        const produit = this.produits.find(p => p.id === id);
        this.panier.ajouter(produit);
    }

    supprimer(id) {
        this.panier.supprimer(id);
    }

    appliquerPromo(pourcentage) {
        this.service.appliquerPromotion(this.panier, { appliquer: p => p - (p * pourcentage / 100) });
    }

    getPanier() {
        return this.panier.items;
    }

    getTotal() {
        return this.panier.getTotal();
    }
}
