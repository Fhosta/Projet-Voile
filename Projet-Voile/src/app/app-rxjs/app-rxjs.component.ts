import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-app-rxjs',
  templateUrl: './app-rxjs.component.html',
  styleUrls: ['./app-rxjs.component.scss']
})
export class ApiComponent implements OnInit {

  private minString = 3;
  private maxString = 40;
  public listeBateau:any;
  var bateau = " "; 

  rechercheDeBateau = "https://iwa2021.edriki.com/api/Boat/Search/fee";
 
  rechercher($event:any){
      var term = $event.target.value;

      if(term.length > this.minString && term.length < this.maxString)
      {
        console.log($event.target.value);
      }
  }
 
  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
      this.http.get<any>(this.rechercheDeBateau).subscribe(respond => {
          console.log(respond);
          var liste = new Array;
          respond.response.datas.forEach(function(value:any){
              var obj = {"ref":value.ref,"name":value.name};
              liste.push(obj);
          });
      })
  }

}