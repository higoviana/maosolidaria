import { Component, OnInit, Input } from '@angular/core';
import { Voluntario } from '../shared/voluntario';
import { VoluntarioService } from '../shared/voluntario.service';
import { VoluntarioDataService } from '../shared/voluntario-data.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit2.component.html',
  styleUrls: ['./edit2.component.css']
})

export class Edit2Component implements OnInit {
  voluntario: Voluntario = new Voluntario;
  key: string = '';

  constructor(private voluntarioService: VoluntarioService, private voluntarioDataService: VoluntarioDataService) { }

  ngOnInit() {
    this.voluntario = new Voluntario();

      }

  onSubmit() {
    if (this.key) {
      this.voluntarioService.update(this.voluntario, this.key);
    } else {
      this.voluntarioService.insert(this.voluntario);
    }

    this.voluntario = new Voluntario();
  }
}
