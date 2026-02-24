const produits = [
    { id: 1, nom: "Produit A", prix: 10 },
    { id: 2, nom: "Produit B", prix: 20 },
    { id: 3, nom: "Produit C", prix: 30 }
];

let panier = [];

function afficherProduits() {
    const liste = document.getElementById("liste-produits");
    liste.innerHTML = "";

    produits.forEach(p => {
        const div = document.createElement("div");
        div.className = "produit";
        div.innerHTML = `
            <span>${p.nom} - ${p.prix} €</span>
            <button data-id="${p.id}">Ajouter</button>
        `;
        liste.appendChild(div);
    });

    liste.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            ajouterAuPanier(parseInt(e.target.dataset.id));
        }
    });
}

function ajouterAuPanier(id) {
    const produit = produits.find(p => p.id === id);
    const item = panier.find(p => p.id === id);

    if (item) item.quantite++;
    else panier.push({ ...produit, quantite: 1 });

    majPanier();
}

function supprimerDuPanier(id) {
    const item = panier.find(p => p.id === id);
    if (!item) return;

    if (item.quantite > 1) item.quantite--;
    else panier = panier.filter(p => p.id !== id);

    majPanier();
}

function majPanier() {
    const ul = document.getElementById("panier-liste");
    const totalSpan = document.getElementById("panier-total");
    ul.innerHTML = "";

    let total = 0;

    panier.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${p.nom} x ${p.quantite} — ${(p.prix * p.quantite).toFixed(2)} €
            <button class="btn-supprimer" data-id="${p.id}">-</button>
        `;
        ul.appendChild(li);
        total += p.prix * p.quantite;
    });

    totalSpan.textContent = total.toFixed(2);

    ul.addEventListener("click", e => {
        if (e.target.classList.contains("btn-supprimer")) {
            supprimerDuPanier(parseInt(e.target.dataset.id));
        }
    }, { once: true });
}

document.addEventListener("DOMContentLoaded", () => {
    afficherProduits();

    document.getElementById("valider-commande").addEventListener("click", () => {
        if (panier.length === 0) alert("Panier vide !");
        else {
            alert("Commande validée !");
            panier = [];
            majPanier();
        }
    });
});
