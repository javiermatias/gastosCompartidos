import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../servicios/menu.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  status: boolean = false;
  constructor(private _menuService:MenuService) { }

  ngOnInit() {
    this._menuService.mysubject.subscribe( (value) => {

      if(this.status==value){
        this.status = !this.status;
      }else{
        this.status = value;
      }
      
       
      });
  }


  menu(){
    this.status = !this.status; 
    //this._menuService.mysubject.next(this.status);
  }



}
