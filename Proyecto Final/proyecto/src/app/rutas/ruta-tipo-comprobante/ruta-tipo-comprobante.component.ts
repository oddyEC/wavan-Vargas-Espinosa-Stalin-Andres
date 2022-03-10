import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-tipo-comprobante',
  templateUrl: './ruta-tipo-comprobante.component.html',
  styleUrls: ['./ruta-tipo-comprobante.component.scss']
})
export class RutaTipoComprobanteComponent implements OnInit {

  constructor(

    private readonly router:Router,

  ) { }

  ngOnInit(): void {
  }
  factura(){
this.router.navigate(['informacion_factura'])
  }
  nota_venta(){
this.router.navigate(['consumidor_final'])
  }
  salir(){
    this.router.navigate(['modulo_comprobante'])
  }

}
