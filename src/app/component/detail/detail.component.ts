import { Component, OnInit } from '@angular/core';
import { Citie } from '../../models/citie';
import { CitieService } from '../../services/cities.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [CitieService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public citie: Citie;
  public confirm: boolean;

  constructor(
    private _citieService: CitieService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getCitie(id);
    });
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  getCitie(id){
    this._citieService.getCitie(id).subscribe(
      response => {
        this.citie = response.citie;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  deleteCitie(id){
    this._citieService.deleteCitie(id).subscribe(
      response => {
        if(response.citie){this._router.navigate(['/cities'])}
      },
      error => {
        console.log(<any>error);
      }
    
    )
  }
}
