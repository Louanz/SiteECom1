import { Commande } from "../domain/Commande.js";

export class CommandeService {
    creerCommande(panier) {
        return new Commande(panier);
    }
}
