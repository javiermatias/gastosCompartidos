import { Component, OnInit } from '@angular/core';
import { Gasto } from '../modelos/gasto';
import { GastoService } from '../servicios/gasto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cargar-gastos',
  templateUrl: './cargar-gastos.component.html',
  styleUrls: ['./cargar-gastos.component.scss']
})
export class CargarGastosComponent implements OnInit {


  gasto:Gasto;
  constructor(private _gastoService:GastoService,private toastr: ToastrService) {
    this.gasto = new Gasto();
   }

  ngOnInit() {
  }
  guardarGastos(){
    //if(this.gasto.tipoGasto == "" || )
   
/*     this._gastoService.postGastos(this.gasto)
    .subscribe(resp => {
       console.log(resp);
     
    }
  ); */
 }

 guardarGasto(){
  if( !this.gasto.detalle || !this.gasto.tipoGasto || !this.gasto.personaPago || !this.gasto.monto ) {
    this.toastr.error("Cargue bien los datos cabroncito");
    return;
  }
  let montoAux = this.gasto.monto.toString().replace(',','.');
  this.gasto.monto = Number.parseFloat(montoAux);
  console.log(this.gasto.monto);
  this._gastoService.postGastos(this.gasto)
  .subscribe(resp => {
    this.toastr.success("Se cargo correctamente el gasto");
    this.gasto = new Gasto();
     console.log(resp);
   }); 
 }


}
