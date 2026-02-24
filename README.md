# e-commerceprojet



# 📦 Projet E‑Commerce — README

## 📝 Description du projet
Ce projet est une application d’e‑commerce permettant à un utilisateur de consulter des produits, gérer un panier, passer une commande, appliquer un code promotionnel et effectuer un paiement.  
Il inclut également une partie administrateur pour gérer les produits, catégories, promotions, normes et commandes.

Le projet s’appuie sur :VOIR LE PDF
 
- un **MCD / MLD** complet  
- un **script SQL** de création de base  
- une **architecture orientée services** (GRASP)  
- des **tests end‑to‑end Cypress**  
- un **playbook Ansible**  
- un **serveur local via http-server**

---

## 🧱 Modèle Conceptuel (MCD)
Le MCD comporte les entités principales suivantes :

- **Client**, **Adresse**
- **Commande**, **Paiement**, **Norme**
- **Produit**, **Catégorie**, **Promotion**
- Associations : *posséder*, *passer*, *respecter*, *contenir*, *bénéficier*, *appartenir*

---


## 🗃️ Script SQL
Le script SQL complet crée :
- les tables principales
- les clés primaires
- les clés étrangères
- les tables d’association

Il est disponible dans le fichier PDF fourni.

---

## 🧪 Tests Cypress
Installation :

```
npm init -y
npm install cypress --save-dev
```

Lancement :

```
npx cypress open
```

Un test d’exemple se trouve dans :  
`cypress/e2e/boutique.cy.js`

---

## 🌐 Serveur local
Installation :

```
npm install -g http-server
```

Lancement :

```
http-server . -p 8080
```

Le site est alors accessible sur :  
`http://127.0.0.1:8080`

---

## ⚙️ Ansible
Configuration locale :

```
[local]
localhost ansible_connection=local
```

Playbook : `playbook.yml`

---

## 🧩 GRASP appliqué
| Principe | Application |
|----------|-------------|
| Creator | Panier crée PanierItem, CommandeService crée Commande |
| Information Expert | Panier calcule total, PanierItem calcule son total |
| Low Coupling | Controller ne connaît pas les détails internes |
| High Cohesion | Chaque classe a un rôle clair |
| Controller | PanierController coordonne les actions |
| Polymorphism | Promotion peut avoir plusieurs variantes |
| Pure Fabrication | PanierService, CommandeService |
| Indirection | Services entre contrôleur et domaine |
| Protected Variations | Promotions, paiements, produits modifiables |

---

## 📁 Structure du projet

```
Projet E-commerce/
│
├── app.js
├── index.html
├── style.css
├── package.json
├── playbook.yml
├── inventory.ini
│
├── Panier.js
├── PanierItem.js
├── PanierService.js
├── PanierController.js
│
├── Commande.js
├── CommandeService.js
│
├── Produit.js
├── Promotion.js
│
├── cypress/
│   └── e2e/boutique.cy.js
│
└── Description Projet MLD MCD SCRIPT.pdf
```

---

## 🚀 Lancer le projet
1. Installer les dépendances :  
   ```
   npm install
   ```
2. Lancer le serveur :  
   ```
   http-server . -p 8080
   ```
3. Ouvrir le navigateur sur :  
   `http://localhost:8080`

---
