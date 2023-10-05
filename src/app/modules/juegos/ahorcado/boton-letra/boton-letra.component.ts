import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-letra',
  templateUrl: './boton-letra.component.html',
  styleUrls: ['./boton-letra.component.scss']
})
export class BotonLetraComponent {
  @Input() letra?: string;

}
