import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private http: HttpClient) { }


  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          const res = this.getWeather(longitude, latitude);
          console.log(res.forEach((val)=>{console.log(val)}))
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  getWeather(longitude:Number,latitude:Number){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&appid=0f6f3dee7ed9462c6abc4e91d68a6082")
  }
  }