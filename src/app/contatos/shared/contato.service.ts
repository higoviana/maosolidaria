import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Contato } from './contato';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  [x: string]: any;
  update(contato: Contato, key: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private db: AngularFireDatabase) { }

  insert(contato: Contato) {
    this.db.list('contato').push(contato)
      .then((result: any) => {
        console.log(result.key);
      });
  }



  getAll() {
    return this.db.list('contato')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...<any>c.payload.val() }));
        })
      );
  }
}
