//----------------------------------------------------- Code ------------------------------------------------------
// Auteur : Florian Hostachy
// Date : 15/12/2021
// Fonction du site : Permet de vendre des voiles de bateaux selon la configurations selectionner par le client 
//----------------------------------------------------------------------------------------------------------------

import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

export class Bateau {
  constructor(
    public ref: string,
    public name: string
  ) {
  }
}

@Component({
  selector: 'app-app-selector-bateau',
  templateUrl: './app-selector-bateau.component.html',
  styleUrls: ['./app-selector-bateau.component.scss']
})
export class AppSelectorBateauComponent implements OnInit {

// Varible pour la gestion de la taille des textes
  private minString = 3;
  private maxString = 40;
//------------------------------------------------

  public listeBateau : any;

//Variable qui contient le tableau de tout les tableau selon les lettres insérer
  tableauBateau = new Array;
//------------------------------------------------------------------------------

  LesVoiles = new Array;

// Variable qui contient la taille du bateau
  TailleBateau: any;
//------------------------------------------

// Variable qui contient la réference du bateau  sélectionner
  referenceBateau: any;
//-----------------------------------------------------------

// Variable pour les liens de l'api 
  rechercheDeBeateau="https://iwa2021.edriki.com/api/Boat/Search/";
  rechercheTailleBateau = "https://iwa2021.edriki.com/api/Boat/ByRef/";
  recherchePrixVoile = "";
//----------------------------------

// Validation des champs pour un appel a l'api 
form = new FormGroup({ 
  gvl: new FormControl("",[Validators.pattern(/^[0-9]*.?[0-9]*$/)]),
  gvsl: new FormControl("",[Validators.pattern(/^[0-9]*.?[0-9]*$/)]),
  gve: new FormControl("",[Validators.pattern(/^[0-9]*.?[0-9]*$/)]),
  gm: new FormControl("",[Validators.pattern(/^[0-9]*.?[0-9]*$/)]),
  ss: new FormControl("",[Validators.pattern(/^[0-9]*.?[0-9]*$/)]),
  sa: new FormControl("",[Validators.pattern(/^[0-9]*.?[0-9]*$/)]),
  gs: new FormControl("",[Validators.pattern(/^[0-9]*.?[0-9]*$/)]),
  gver: new FormControl("",[Validators.pattern(/^[0-9]*.?[0-9]*$/)]),
})
//------------------------------------------------------------------

// Variable des différentes mesures
  mesuregvl : any;
  mesuregvsl: any;
  mesuregve: any;
  mesuregm: any;
  mesurege: any;
  mesuress: any;
  mesuresa: any;
  mesuregs: any;
//------------------------------------

  constructor(private http : HttpClient) { }

// Restriction des caractères pour le champs recherche du bateau
  onChangeEvent(event:any){
    var term=event.target.value;
    var head =document.getElementById('header');
    if(term.length  >= this.minString && term.length <this.maxString){
    }
    if(!term){
        head?.style.display=='none';
    }

  }
//----------------------------------------------------------------

  ngOnInit(): void {
    }
   
// Fonction qui permet de récuperer la liste des bateaux et la mais dans un tableau
    getData($event:any){
      console.log($event)
      var term=$event.target.value;
      console.log(this.rechercheDeBeateau+term);
      if(term.length >= this.minString && term.length <this.maxString){
        this.http.get<any>(this.rechercheDeBeateau+term).subscribe(
          respond => {
          var liste = new Array;
           respond.response.datas.forEach(function(value:any){
             var obj = {"ref": value.ref,"name" : value.name};
             liste.push(obj);
           })
          return this.tableauBateau = liste;
          
        })
      }
    }
//------------------------------------------------------------------------------------

// Fonction qui récuperer la réference du bateau pour trouver les différentes tailles et les affiche.
    selectionDuBateau($event :any){
      var term=$event.target.value;
      this.http.get<any>(this.rechercheTailleBateau+term).subscribe(response =>{
      var liste = new Array;
      var bateau = response.response.datas.sails;
      this.TailleBateau = response.response.datas.lengthm;
      liste.push(bateau)
      this.mesuregvl = response.response.datas.sails.gvl;
      this.mesuregvsl = response.response.datas.sails.gvsl;
      this.mesuregve = response.response.datas.sails.gve;
      this.mesuregm = response.response.datas.sails.gm;
      this.mesurege = response.response.datas.sails.ge; 
      this.mesuress = response.response.datas.sails.ss;
      this.mesuresa = response.response.datas.sails.sa;
      this.mesuregs = response.response.datas.sails.gs;
      return this.TailleBateau;
      })
      }

//-----------------------------------------------------------------------------------------------------

// Fonction qui permet la validation des mesures du bateau et l'appel à l'api qui donnes les voiles selon les mesures 
Verification(){
  if (this.form.valid)
  {
    
  this.recherchePrixVoile ="https://iwa2021.edriki.com/api/Item/Items?length="+this.TailleBateau+"gvl="+this.mesuregvl+"&gvsl="+this.mesuregvsl+"&gve="+this.mesuregve+"&ss="+this.mesuress+"&gs="+this.mesuregs+"";
  this.http.get<any>(this.recherchePrixVoile).subscribe(response =>{
  console.log(response)
  })

  }
  else{
    alert("Les valeurs ne sont pas valide, attention le site n'accepte que les points pour les mesures et non pas les ',' il n'accepte pas les lettres non plus.")
  }
}
}
//-----------------------------------------------------------------------------------------------------------------------