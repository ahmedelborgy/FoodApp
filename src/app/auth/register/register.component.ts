import { Register } from './../moduleAut/register';
import { AuthService } from './../authService/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Register } from '../moduleAut/register';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[]
})


export class RegisterComponent {

  is_mess:string=''
  files: any;
  imageSrc:any;
  constructor(private auth:AuthService,private toastr: ToastrService){

  }







registerForm=new FormGroup({
  // "The userName must be at least 4 characters.",
  // "The userName must contain characters and end with numbers without spaces."
  
  userName: new FormControl('nnn1',[
    Validators.required,
    Validators.maxLength(50),
    Validators.minLength(4),
   Validators.pattern(/^(?=.{4,}$)(?=.*[a-zA-Z])(?=.*\d$)[a-zA-Z\d]+$/)

  ]),

  email:new FormControl('nn@gmail.com',[
    Validators.required,
    Validators.email,
    Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

  ]),
  country:new FormControl('eg',[
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)
  ]),
  phoneNumber:new FormControl('01002800943',[
    Validators.required,
    Validators.pattern(/^(002)?01[01245][0-9]{8}$/)
  ]),
  profileImage:new FormControl(),
  password:new FormControl('test@Test1',[
    Validators.required,
    Validators.minLength(6),
    // Validators.pattern(/^[A-Z][a-z-0-9]{5,16}$/)
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|\\;:'",.<>/?]).{6,}$/)
  
  ]),
  confirmPassword:new FormControl('test@Test1',[
    Validators.required,
    Validators.minLength(6),
    // Validators.pattern(/^[A-Z][a-z-0-9]{5,16}$/)
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|\\;:'",.<>/?]).{6,}$/)
  
  ]),

})









// =====================================




// <!-- -------------------------------UserImage------------------- -->













signUp(registerForm:any){

 
let d=Object.entries(this.registerForm.value)
let res:any=new Map(d);
res.set('profileImage',this.imageSrc)
console.log(res);


console.log(registerForm);

  let myData=new FormData();
  
for (const [k,v] of res) {

  myData.append(k,v);

}
myData.append('profileImage',registerForm.value.profileImage);
console.log(myData);

  
  // myData.append('userName',formData.value.userName);
  // myData.append('email',formData.value.email);
  // myData.append(' country',formData.value. country);
  // myData.append('userName',formData.value.userName);
  // myData.append('userName',formData.value.userName);
  // myData.append('userName',formData.value.userName);
  // myData.append('userName',formData.value.userName);
  // myData.append('userName',formData.value.userName);
  // myData.append('userName',formData.value.userName);





// console.log(myData.get('userName'));

// x.append('email','registerForm.value.email')
// console.log(x.get('email'))




console.log('-------------------------------------');


if(registerForm.valid){


this.auth.register(myData).subscribe({
next:(res)=>{
console.log(res);

this.is_mess=res.message;

// console.log(this.is_mess);

},
error:(err)=>{
console.log(err);
this.is_mess=err.error.message
  // this['toastr'].error('registeer: '+this.is_mess, 'Toastr fun!');
  this.toastr.error('registeer: '+this.is_mess, 'Toastr fun!');
},
complete:()=>{
console.log('complet---->');
this.toastr.success('registeer: '+this.is_mess ,'Toastr fun!');
}

})


}else{
  console.log('Invalid');
  
}
 
  
}
// ---------------------
filesm: File[] = [];

onSelect(event:any) {
  console.log(event);
  this. imageSrc=event.addedFiles[0];
  this.filesm.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.filesm.splice(this.files.indexOf(event), 1);
}

}



