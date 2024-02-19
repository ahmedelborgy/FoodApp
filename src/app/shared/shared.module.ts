import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    ToastrModule.forRoot({closeButton:true,
      timeOut: 10000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    progressAnimation:'increasing',
    progressBar:true
    })
    ,
    NgxDropzoneModule
  ],
  exports:[
    HttpClientModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule, // required animations module
    ToastrModule // ToastrModule added
    ,
     NgxDropzoneModule 
  ]
})
export class SharedModule { }
