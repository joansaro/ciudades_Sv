import { Component, OnInit } from '@angular/core';
import { Citie } from '../../models/citie';
import { CitieService } from '../../services/cities.service'
import { CitiesComponent } from '../cities/cities.component';
import { provideRoutes } from '@angular/router';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [CitieService, UploadService]
})
export class EditComponent implements OnInit {

  public title: String;
  public citie: Citie;
  public status: String;
  public filesToUpload: Array<File>;
  public saveCitie;
  public url: string;

  constructor(
    private _citieService: CitieService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
    
  ) { 
    this.title = "Editar ciudad.";
  }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getCitie(id);
      this.url = Global.url;
    });
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

  onSubmit(){
    this._citieService.updateCitie(this.citie).subscribe(
      response => {
        if (response.citie){

          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.citie._id, [], this.filesToUpload, 'image')
            .then((result: any) =>{

              this.saveCitie = result.citie;
              this.status = 'success';
            
          });

        }else{
          this.saveCitie = response.citie;
          this.status = 'success';
        }

        }else{
         
          this.status = 'failed';
        
        }

        },
        
        error => {
          console.log(<any>error);
    }
  
  );

  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
