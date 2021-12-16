# ProjetVoile

## Présentation

Il a pour but d 'afficher les prix des voiles selon un modèle de bateau choisi avec des caractéristiques modulables.

## Prérequis

-	Angular CLI : 13.0.2
-	Node : 16.13.0
-	Un navigateur compatible avec Angular (https://angular.io/guide/browser-support)

## Les fonctionnalitées : 

Le site pour l'instant permet la récupération de la liste des bateaux et l'affichage des tailles, la vérification des mesures est fonctionnel ainsi que l'appel à l'api pour la récupération des prix et description des voiles disponibles.  

## Etape 1 : 

La première étape qui consiste à récupéré la liste des bateaux sachant que je ne connaissais pas Angular j'ai dû aller chercher le module pour appeler l'api, sur le site d'angular,
avec le module HTTPCLIENT : https://angular.io/guide/http. Le client arrive sur le site est rentré les informations dans le champs avec soit le nom du bateau précis soit les premières lettres il en faut minimum 3 et maximum 40.

## Etape 2 : 

La récupération de la taille du bateau pour cela il fallait interroger l'api avec la référence du bateau pour obtenir les différentes tailles selon la références du bateau choisi. Le client une fois le bateau sélectionnait verra la taille de sont bateau.


## Etape 3 : 

La mise en place des différentes données dans les inputs du site que j'ai placé dans différentes variables pour par la suite avoir un accès facile au données et  vérifier que le client ne  rentre pas des informations erronés. Le client verra toutes les informations concernant sont bateaux et pourra les modifiers avec une vérification des informations.

#  Les problèmes rencontrés au cours du projet

## Dans l'étape 1 : 

 - La découverte d'angular 
 - J'ai dû chercher un module pour interroger l'api ce qui m'a pris une grande partie de mon temps au départ en s'aidant avec les personnes de la classe ont a finalement trouvé la solution HTTPCLIENT

## Dans l'étape 2 : 

- J'ai eu énormément de problèmes pour récupérer la réference du bateau j'arrivé à la recuperer dans un console.log mais impossible de le rentré dans une datalist html j'ai donc choisi de la mettre dans un select qui fonctionne correctement.
- Une fois se problème régler j'ai pu récupérer toutes mes mesures et les affichers.


## Dans l'étape 3 :

- Pour la vérifications des données rentrées j'ai était aidé pour la regex et les modules a utilisé car je ne voyais pas comment faire.


## Problème générale : 

- Je n'est pas eu le temps de voir la transmission des données entres les différents composant.
- Mauvaise gestion de mon temps investie dans le projet.

# Reste à faire : 

Dans le console log j'arrive à récupérer les informations sur les voiles disponibles pour le bateau choisie, mais je n'arrive pas encore à les affichers mais je voit la solution il faut que j'utilise le type des bateaux pour les séparaient et les mettres dans des listes.
