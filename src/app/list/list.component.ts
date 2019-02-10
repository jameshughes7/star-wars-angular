import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarWarsService } from '../star-wars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
// fetches a copy of the characters
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = 'all';
  subscription: Subscription;

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
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.swService.charactersChanged.subscribe(
      () => {
      this.characters = this.swService.getCharacters(this.loadedSide);
    });
  }
  // custom observsables need to be unsubscribed when finished using them
  // if we don't unsubscribe we can pollute the memory
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
