# ProjetVoile

## Présentation

Il a pour but d 'afficher les prix des voiles selon un modèle de bateau choisi avec des caractéristiques modulable.

## Prérequis

-	Angular CLI : 13.0.2
-	Node : 16.13.0
-	Un navigateur compatible avec Angular (https://angular.io/guide/browser-support)

## Les fonctionnalitées : 

Le site pour l'instant permet la récuperation de la liste des bateaux et l'affichage des tailles, la vérification des mesures est fonctionnel ainsi que l'appel à l'api pour la récuperation des prix et description des voiles disponible  

## Etape 1 : 

La première étape qui consiste à récupére la liste des bateaux sachant que je ne connaissais pas Angular j'ai du aller chercher le module pour appelé l'api, sur le site d'angular,
avec le module HTTPCLIENT : https://angular.io/guide/http. Le client arrive sur le site est rentre les informations dans le champs avec soit le nom du bateau précis soit les première lettres il en faut minimun 3 et maximun 40

## Etape 2 : 

La récupération de la taille du bateau pour cela il fallait interroger l'api avec la réference du bateau pour obtenir les différentes tailles selon la réferences du bateau choisi. Le client une fois le bateau sélectionner verra la taille de sont bateau.


## Etape 3 : 

La mise en place des différentes données dans les inputs du site que j'ai placé dans différentes variable pour par la suite avoir un accès facile au données et  vérifier que le client ne  rentre pas des informations erronés. Le client verra toutes les informations concernant sont bateau et pourra les modifiers avec une vérification des informations

# Problèmes rencontrés au cours du projet

## Dans l'étape 1 : 

 - La découverte d'angular 
 - J'ai du chercher un module pour interroger l'api se qui m'a pris une grande partie de mon temps au départ en s'aidant avec les personnes de la classe on a finalement trouvé la solution HTTPCLIENT

## Dans l'étape 2 : 

- J'ai eu énormément de problème pour récuperer la réference du bateau j'arrivé à la recuperer dans un console.log mais impossible de le rentré dans une datalist html j'ai donc choisi de la mettre dans un select qui fonctionne correctement.
- Une fois se problème régler j'ai pu récuperer tout mes mesures et les affichers.


## Dans l'étape 3 :

- Pour la vérifications des données rentrées j'ai était aidé pour la regex et les modules a utilisé car je ne voyais pas comment faire.


## Problème générale : 

- Je n'est pas eu le temps de voir la transmission des données entres les différents composant.
- Mauvaise gestion de mon temps investie dans le projet.

# Reste à faire : 

Dans le console log j'arrive à récuperer les informations sur les voiles disponibles pour le bateau choisie mais je n'arrive pas encore à les affichers mais je voit la solution il faut que j'utilise le type des bateau pour les séparers  et les mettres dans des listes.
