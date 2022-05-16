import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Voluntario } from './voluntario';

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
