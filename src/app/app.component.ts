import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';

@Component({
  selector: 'em-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'em';

  constructor(private _router: Router){

  }

  ngOnInit(){
    //this._router.navigate(['expense']);
  }
  
}
