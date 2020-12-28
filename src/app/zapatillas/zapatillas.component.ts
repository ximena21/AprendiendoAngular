import { Component, OnInit } from '@angular/core';

import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../zapatilla.service';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {

  public titulo: string = 'Componente de Zapatillas';
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public miMarca: string;

  constructor(private _zapatillaService: ZapatillaService) {
    this.miMarca = 'Fila';
    this.color = 'blue';
    this.marcas = new Array();
  }

  ngOnInit(): void {
    this.zapatillas = this._zapatillaService.getZapatillas();
    alert(this._zapatillaService.getTexto());
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });

    console.log(this.marcas);
  }

  getMarca() {
    alert(this.miMarca);
  }

  addMarca() {
    this.marcas.push(this.miMarca);
  }

  borrarMarca(index) {
    //delete this.marcas[index];
    this.marcas.splice(index, 1);
  }

  onBlur() {
    console.log('Has salido del input');
  }

  mostrarPalabra() {
    alert(this.miMarca);
  }

}
