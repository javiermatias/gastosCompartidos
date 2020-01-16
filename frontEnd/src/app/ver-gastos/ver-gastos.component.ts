import { Component, OnInit } from '@angular/core';
import { GastoService } from '../servicios/gasto.service';
import { Gasto } from '../modelos/gasto';

@Component({
  selector: 'app-ver-gastos',
  templateUrl: './ver-gastos.component.html',
  styleUrls: ['./ver-gastos.component.scss']
})
export class VerGastosComponent implements OnInit {

  gastos:Array<Gasto>;
  constructor(private _gastoService:GastoService) { }

  ngOnInit() {
    this._gastoService.getGastosParticipantes()
    .subscribe((gastos:Array<Gasto>) => {
this.gastos=gastos;
    })
  }

}
