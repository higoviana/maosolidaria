import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './mapstyles';


@Component({
  selector: 'app-pontos-coleta',
  templateUrl: './pontos-coleta.component.html',
  styleUrls: ['./pontos-coleta.component.css']
})
export class PontosColetaComponent implements OnInit {

  title = 'google-maps';

  private map: google.maps.Map | undefined

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: '',
    });

    loader.load().then(() => {
      console.log('loaded gmaps')

      const location = { lat: -23.533674229736704, lng: -46.65165360695787 }


      this.map = new google.maps.Map(<any> document.getElementById("map"), {
        center: location,
        zoom: 11,
        //styles: styles
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,


      });
    })
  }
}
