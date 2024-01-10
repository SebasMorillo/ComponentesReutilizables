import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent  implements OnInit {
  @Input() nombre: string="";
  @Input() descripcion: string="";
  @Input() imagen: string ="";
  
  constructor() { }

  ngOnInit() {}

}
