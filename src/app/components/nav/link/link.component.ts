import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input({ alias: 'route-link', required: true }) link!: string;
  @Input({ alias: 'route-name', required: true }) name!: string;
}
