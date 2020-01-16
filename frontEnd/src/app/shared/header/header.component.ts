import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../servicios/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  status: boolean = false;
  constructor(private _menuService:MenuService) { }

  ngOnInit() {
  }

  clickMenu(){    
    this.status = !this.status; 
    this._menuService.mysubject.next(this.status);  
  }

}
