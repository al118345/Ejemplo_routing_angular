import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  almaceno_usuario () {
    localStorage.setItem('currentUser', 'test');
  }

  eliminar_credenciales() {
    localStorage.setItem('currentUser', 'notest');
  }
}
