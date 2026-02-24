export class Promotion {
    constructor(pourcentage) {
        this.pourcentage = pourcentage;
    }

    appliquer(prix) {
        return prix - (prix * this.pourcentage / 100);
    }
}


// GRASP : Polymorphism (plusieurs types de promotions possibles)
