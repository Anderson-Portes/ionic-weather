import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherTemp: number;
  todayDate = new Date();
  cityName: string =  '';
  weatherIcon: string;
  weatherDetails: any;
  name: string = '';
  loading: boolean = true;

  constructor(public httpClient: HttpClient) {
  }

  loadData() {
    this.httpClient.get(`${API_URL}?q=${this.cityName}&appid=${API_KEY}`).subscribe(res => {
      this.weatherTemp = res['main'];
      this.name = res['name'];
      this.weatherDetails = res['weather'][0];
      this.weatherIcon = 'http://openweathermap.org/img/wn/' + this.weatherDetails.icon + '@4x.png';
      this.loading = false;
    });
  }
}
