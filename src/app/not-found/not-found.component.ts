import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = 'No hay resultados';
  @Input() resetLinkText: string = 'Volver a buscar';
  @Input() resetLinkRoute: string = '/';

  constructor() {}

  ngOnInit(): void {}
}
