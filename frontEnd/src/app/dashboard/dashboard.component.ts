import { Component, OnInit } from '@angular/core';
import { GastoService } from '../servicios/gasto.service';
import { ToastrService } from 'ngx-toastr';
import { Saldos } from '../modelos/saldos';
import { MenuService } from '../servicios/menu.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  totales:Array<Saldos>;
  total:number=0;
  totalParcial:number=0;

  constructor(private _gastoService:GastoService,
    private toastr: ToastrService) { 
      this.totales = new Array<Saldos>();
    }

  ngOnInit() {
    this.cargarGastos();
    //this.toastr.success('Hello world!', 'Toastr fun!');
  }

  cargarGastos(){
    this._gastoService.getGastos()
    .subscribe((gastos:Array<any>) => {
      this.total = gastos.reduce((a, b) => a + b['monto'], 0);
      let totalParcial = this.total / gastos.length;
      console.log (totalParcial);
      
      gastos.forEach(pago => {
        let saldo = new Saldos();
        saldo.participante = pago.personaPago;
        saldo.debe= '-$' + parseFloat(totalParcial.toFixed(2)).toString();
        saldo.haber='+$' + parseFloat(pago.monto.toFixed(2)).toString();
       // console.log(pago.monto +'-'+ totalParcial)
        let saldoParcial = pago.monto - totalParcial;
        if(saldoParcial>=0){
         saldo.total = '+$' + parseFloat(saldoParcial.toFixed(2)).toString();
        }else{
          saldo.total = '-$' + parseFloat(saldoParcial.toFixed(2)).toString();
        }
       
        this.totales.push(saldo);
      });
      console.log(this.totales);
       //console.log(gastos);


      // this.total=this.totalGastos(gastos);
       //console.log(this.totalGastos(gastos));
    }
  );
  }

 totalGastos(gastos:Array<any>):number{
  let total = gastos.reduce((a, b) => a + b['monto'], 0);
   return  total ;
 }

}
