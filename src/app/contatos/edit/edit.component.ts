import { Component, OnInit, Input } from '@angular/core';
import { Contato } from '../shared/contato';
import { ContatoService } from '../shared/contato.service';
import { ContatoDataService } from '../shared/contato-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  contato: Contato = new Contato;
  key: string = '';

  constructor(private contatoService: ContatoService, private contatoDataService: ContatoDataService) { }

  ngOnInit() {
    this.contato = new Contato();

      }

  onSubmit() {
    if (this.key) {
      this.contatoService.update(this.contato, this.key);
    } else {
      this.contatoService.insert(this.contato);
    }

    this.contato = new Contato();
  }
}
