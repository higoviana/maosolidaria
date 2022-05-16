import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Voluntario } from './voluntarios';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {
  [x: string]: any;
  update(voluntario: Voluntario, key: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private db: AngularFireDatabase) { }

  insert(voluntario: Voluntario) {
    this.db.list('voluntario').push(voluntario)
      .then((result: any) => {
        console.log(result.key);
      });
  }
}
