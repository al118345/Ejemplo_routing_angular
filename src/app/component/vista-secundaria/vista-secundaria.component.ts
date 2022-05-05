import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vista-secundaria',
  templateUrl: './vista-secundaria.component.html',
  styleUrls: ['./vista-secundaria.component.css']
})
export class VistaSecundariaComponent implements OnInit {
  public  id:string | null;

  constructor( private route:ActivatedRoute ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id == null){
      this.id = '0'
    }


  }

  ngOnInit(): void {
  }

}
