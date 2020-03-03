import { Component, OnInit } from '@angular/core';
import { Citie } from '../../models/citie';
import { CitieService } from '../../services/cities.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [CitieService]
})
export class CitiesComponent implements OnInit {
  public citie: Citie[];
  public url: string;

  constructor(
    private _citiesService: CitieService
  ) {
    this.url = Global.url;
   }

  ngOnInit() {
    this.getCities();
  }

  getCities(){
    this._citiesService.getCities().subscribe(
      response =>{
        console.log(response);

        if(response.citie) {
          this.citie = response.citie;
        }
      },
      error => {
        console.log(<any>error);
        
      }
    );
  }

}
