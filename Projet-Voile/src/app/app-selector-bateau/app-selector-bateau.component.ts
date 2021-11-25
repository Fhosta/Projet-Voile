import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
  showMe: boolean = false;
  rechercheDeBeateau="https://iwa2021.edriki.com/api/Boat/Search/";
 // rechercheMesure = "";
  constructor(private http : HttpClient) { }


  onChangeEvnent(event:any){
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
      if(term.length >= this.minString && term.length <this.maxString){
        this.http.get<any>(this.rechercheDeBeateau+term).subscribe(response =>{
          console.log(response.response.datas);
          this.tableauBateau = response.response.datas;
          this.showMe =true;
        })
        console.log($event.target.value)
      }
      else{
        /*var head =document.getElementById('header');
        head.style.display=='none';
        this.tableauBateau.length=0
        this.showMe = false;*/
      }


    }


}
