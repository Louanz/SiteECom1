export class PanierService {
    appliquerPromotion(panier, promotion) {
        panier.items.forEach(item => {
            item.produit.prix = promotion.appliquer(item.produit.prix);
        });
    }
}
