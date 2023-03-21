import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private http: HttpClient) { }
Tempdata:any

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
            // console.log(latitude,longitude)
          this.getWeather(longitude, latitude);
          // res.forEach((val)=>{console.log(val)})
          console.log(this.Tempdata)
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  getWeather(longitude:Number,latitude:Number){
    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&appid=0f6f3dee7ed9462c6abc4e91d68a6082")    .then(response=>response.json()).then(data=>{this.addTempData(data)})
 
  }
  addTempData(data:any){this.Tempdata = data;
     this.Tempdata.temp = this.Tempdata.main.temp 
     this.Tempdata.temp_like = this.Tempdata.main.feels_like
     this.Tempdata.max = this.Tempdata.main.temp_max
     this.Tempdata.min = this.Tempdata.main.temp_min
     this.Tempdata.location=this.Tempdata.name
    this.Tempdata.desc=this.Tempdata.weather[0].main
    this.Tempdata.humidity=this.Tempdata.main.humidity
  }

  }