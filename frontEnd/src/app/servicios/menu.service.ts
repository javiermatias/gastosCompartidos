import { Injectable } from '@angular/core';
import "rxjs/Rx";
import { Subject } from "rxjs/Subject";
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public mysubject : Subject<boolean> = new Subject();
  constructor() { }
}
