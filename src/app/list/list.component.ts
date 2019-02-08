import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  // initiliase route listener
  // complex function is best placed in ngOnInit
  // But could also be placed in constructor
  // params refers to any variable part in the route like :side
  // params object is an observable
  // observables wrap asynchronous events
  // so we can subscribe to these observables to react to these events
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
      }
    );
  }
}
