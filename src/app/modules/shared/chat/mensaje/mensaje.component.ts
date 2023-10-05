import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent {
  @Input() clase?: string;
  @Input() usuario?: string;
  @Input() mensaje?: string;
  @Input() fecha?: string;

}
