import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-arquivos',
  templateUrl: './arquivos.component.html',
  styleUrls: ['./arquivos.component.css']
})
export class ArquivosComponent implements OnInit {

  title = 'download-pdf';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
  }

 download() {
     this.api.downloadPDF().subscribe(res => {
       let url = window.URL.createObjectURL(res);
       let a = document.createElement('a');
       a.href = url;
       a.download = 'Panfletos_para_divulgação';
       a.click();
       window.URL.revokeObjectURL(url);
       a.remove();
     });
   }

 }


