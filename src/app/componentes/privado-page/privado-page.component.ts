import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../servicios/noticias.service';

@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  styleUrls: ['./privado-page.component.scss']
})
export class PrivadoPageComponent implements OnInit {

  constructor(noticias: NoticiasService) { 
       noticias.getNews().subscribe(val => console.log(val));
  }

  ngOnInit() {
  }

}
