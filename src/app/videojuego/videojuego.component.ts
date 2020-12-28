import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public listado: string;

  constructor() {
    this.titulo = 'Componente de Videojuegos';
    this.listado = 'Listado de los juegos más populares';
  }

  // se ejecuta una vez cargado el template
  ngOnInit(): void {
    //console.log('OnInit ejecutado');
  }

  // se ejecuta cada vez que hay cambios
  ngDoCheck(): void {
    //console.log('DoCheck ejecutado');
  }

  // se ejecuta antes de eliminar la instancia de un componente
  ngOnDestroy(): void {
    //console.log('OnDestroy ejecutado');
  }

  cambiarTitulo() {
    this.titulo = 'Nuevo título del componente';
  }

}
