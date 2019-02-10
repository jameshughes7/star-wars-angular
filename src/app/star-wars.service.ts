import { LogService } from './log.service';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];
  private logService: LogService;
  // Subject is special objext provided by rxjs package
  // Similar to an Event Emitter (can emit an event and subscribe to it)
  charactersChanged = new Subject<void>();

  constructor(logService: LogService) {
    this.logService = logService;
      }

  // slice() and filter() gives us a new copy of the array
  // because we don't want to access the original array
  // which is marked as private from some component in out application
  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  // findIndex() finds the first element where the callback evaluates to true
  // finds the position in characters array of charInfo argument
  // then assigns the side chosen by user clicking side button to the character in mention
  // const pos = -1 when charInfo not in the array
  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name  === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    // new event being emmited here with this.charactersChanged.next();
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' +  charInfo.side);
  }


  // finds the 1st element where the callback evaluates to true
  // finds the position in characters array where the name argument equals
  // const pos = -1 when charInfo not in the array
  // so returns name argument if not in the characters array and then gets added to it
  // callback returns true if char.name === name
  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return name;
    }
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }
}


