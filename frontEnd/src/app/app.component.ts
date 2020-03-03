import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, ActivatedRoute, NavigationEnd, Event} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getCurrentLang();
  }
  
  languague:string='hola';

  constructor(private titleService: Title, router: Router, activatedRoute: ActivatedRoute,private translate: TranslateService) {
  
    //this.languague=translate.currentLang;
    console.log(translate.currentLang);
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(router.routerState, router.routerState.root).join(' | ');
        titleService.setTitle(title);
      }
    });

    this.translate.use('es');
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getCurrentLang(){
    console.log('browser lang', this.translate.getBrowserLang());
    console.log('browser lang', this.translate.currentLang);
  }
}
