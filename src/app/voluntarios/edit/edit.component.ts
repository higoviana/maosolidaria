import { Component, OnInit, Input } from '@angular/core';
import { Voluntario } from '../shared/voluntarios';
import { VoluntarioService } from '../shared/voluntarios.service';
import { VoluntariosDataService } from '../shared/voluntarios-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  voluntario : Voluntario  = new Voluntario;
  key: string = '';

  constructor(private VoluntarioService: VoluntarioService, private VoluntariosDataService: VoluntariosDataService) { }

  ngOnInit() {
    this.voluntario = new Voluntario();

      }

  onSubmit() {
    if (this.key) {
      this.VoluntarioService.update(this.voluntario, this.key);
    } else {
      this.VoluntarioService.insert(this.voluntario);
    }

    this.voluntario = new Voluntario();
  }
}

