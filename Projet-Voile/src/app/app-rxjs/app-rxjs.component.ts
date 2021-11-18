import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-app-rxjs',
  templateUrl: './app-rxjs.component.html',
  styleUrls: ['./app-rxjs.component.scss']
})
export class AppRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
