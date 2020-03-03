import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../servicios/menu.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  status: boolean = false;
  idioma:string="Language";
  constructor(private _menuService:MenuService,private translate: TranslateService) { 

    translate.setDefaultLang('es');

  }

  ngOnInit() {
  }

  useLanguage(language: string) {

    if(language=='es'){
      this.idioma="Español";
    }else if(language=='en'){
      this.idioma="English";
    }

    this.translate.use(language);
}

  clickMenu(){    
    this.status = !this.status; 
    this._menuService.mysubject.next(this.status);  
  }

}
