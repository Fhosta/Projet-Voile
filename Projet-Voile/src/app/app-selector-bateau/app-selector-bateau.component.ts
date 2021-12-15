import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  private minString = 3;
  private maxString = 40;
  public listeBateau : any
  tableauBateau = new Array
  TailleBateau: any;
  referenceBateau: any;
  rechercheDeBeateau="https://iwa2021.edriki.com/api/Boat/Search/";
  rechercheTailleBateau = "https://iwa2021.edriki.com/api/Boat/ByRef/";
  mesuregvl : any;
  mesuregvsl: any;
  mesuregve: any;
  mesuregm: any;
  mesurege: any;
  mesuress: any;
  mesuresa: any;
  mesuregs: any;
  constructor(private http : HttpClient) { }


  onChangeEvent(event:any){
    var term=event.target.value;
    var head =document.getElementById('header');
    if(term.length  >= this.minString && term.length <this.maxString){

      console.log(event.target.value)
    }
    if(!term){
        head?.style.display=='none';
    }

  }

  ngOnInit(): void {
    }
   
  
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

    selectionDuBateau($event :any){
      var term=$event.target.value;
      this.http.get<any>(this.rechercheTailleBateau+term).subscribe(response =>{
      var liste = new Array;
      var bateau = response.response.datas.sails;
      this.TailleBateau = response.response.datas.lengthm;
      liste.push(bateau)
      console.log(liste);
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










    /*
    TrouverBateau(nomBateau : string){
      for (let index = 0; index < this.tableauBateau.length; index++) {
        const element = this.tableauBateau[index];
        if (nomBateau == element.name){
          return element;
          
        }

      }
    }

    selectionBateau(nomBateau : any){
      let _bateau = this.TrouverBateau(nomBateau.target.value)
        if(_bateau.ref != ''){
          this.referenceBateau = this.getData(_bateau.ref) 
          console.log(this.referenceBateau)
          this.getTaille(nomBateau.ref)
        }
    }

    getTaille(referenceBateau : string){
    this.http.get<any>(this.rechercheTailleBateau+referenceBateau).subscribe(
      respond => {
       return this.TailleBateau = respond.response.datas.lengthm;
      }
    )
    }
*/

}
