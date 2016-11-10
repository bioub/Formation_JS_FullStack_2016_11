# Exercices

## Supprimer un contact

* Côté serveur, créer en s'inspirant de contact.show un controleur pour supprimer un contact (dans Mongoose la méthode s'appelle findByIdAndRemove), retourner le contact qui vient d'être supprimé
* Sur la liste des contacts ajouter un bouton moins.
* Créer une fonction supprimer sur le scope et l'appeler au clic de ce bouton, avec en paramètres d'entrée le contact ou l'indice du contact à supprimer
* Récupérer l'ObjectId MongoDB et envoyer une requete DELETE au serveur REST pour supprimer ce contact
* En cas de succès, le supprimer du tableau côté Angular

## Afficher le détail d'un contact

* Créer un contrôleur et un template
* Charger le contrôleur dans app.module avec Require.js
* Créer une route pour afficher un contact avec un paramètres, les URL des routes avec paramètres sont sous la forme /une_url/:param
* Dans le controller récupérer l'id saisi dans l'URL grâce au service $routeParams
* Récupérer le contact en envoyant une requete GET à l'API REST
* Afficher le contact dans le template
