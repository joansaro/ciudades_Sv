import { Component, OnInit } from '@angular/core';
import { Citie } from '../../models/citie';
import { CitieService } from '../../services/cities.service'
import { CitiesComponent } from '../cities/cities.component';
import { provideRoutes } from '@angular/router';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CitieService, UploadService]
})
export class CreateComponent implements OnInit {
  
  public title: String;
  public citie: Citie;
  public status: String;
  public filesToUpload: Array<File>;
  public saveCitie;

  constructor(
    private _citieService: CitieService,
    private _uploadService: UploadService
  ) { 
    this.title = "Agregar una ciudad.";
    this.citie = new Citie('','','','','');
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.citie);
    this._citieService.saveCitie(this.citie).subscribe(
      response =>{
        if (response.citie){

          //Subir la imagen 
          if(this.filesToUpload){

            this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.citie._id, [], this.filesToUpload, 'image')
            .then((result: any) =>{

              this.saveCitie = result.citie;
              this.status = 'success';

              
              form.reset();

          });
        }else{
          this.saveCitie = response.citie;
          this.status = 'success';
          form.reset();
        }

        }else{
          this.status = 'failed';
        }

      },
      error =>{
        console.log(<any>error);

      }
    );
    
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    
  }
}
