import { Injectable } from '@angular/core';

export class Daiquiri {
  // this is our data model. the "message" and "messageState" properties are used in the "banner" demo
  constructor(public name: string,
              public message = '',
              public messageState = 'hidden'
  ) { }

}

const ALL_DAIQUIRIS = [
  'Windstorm',
  'RubberMan',
  'Bombasto',
  'Magneta',
  'Dynama',
  'Narco',
  'Celeritas',
  'Dr IQ',
  'Magma',
  'Tornado'
].map(name => new Daiquiri(name));

@Injectable()
export class FadeService {

  daiquiris: Daiquiri[] = ALL_DAIQUIRIS;

  canAdd() {
    return this.daiquiris.length < ALL_DAIQUIRIS.length;
  }

  canRemove() {
    return this.daiquiris.length > 0;
  }

  add(active = true) {
    let daiquiri = ALL_DAIQUIRIS[this.daiquiris.length];
    this.daiquiris.push(daiquiri);
  }

  remove() {
    this.daiquiris.length -= 1;
  }

}