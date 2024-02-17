import { AuthService } from './../authService/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../moduleAut/register';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[]
})


export class RegisterComponent {

  is_mess:string=''
  constructor(private auth:AuthService,private toastr: ToastrService){

  }
registerForm=new FormGroup({
  // "The userName must be at least 4 characters.",
  // "The userName must contain characters and end with numbers without spaces."
  
  userName: new FormControl(null,[
    Validators.required,
    Validators.maxLength(50),
    Validators.minLength(4),
   Validators.pattern(/^(?=.{4,}$)(?=.*[a-zA-Z])(?=.*\d$)[a-zA-Z\d]+$/)

  ]),

  email:new FormControl(null,[
    Validators.required,
    Validators.email,
    Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

  ]),
  country:new FormControl(null,[
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)
  ]),
  phoneNumber:new FormControl(null,[
    Validators.required,
    Validators.pattern(/^(002)?01[01245][0-9]{8}$/)
  ]),
  profileImage:new FormControl(),
  password:new FormControl(null,[
    Validators.required,
    Validators.minLength(6),
    // Validators.pattern(/^[A-Z][a-z-0-9]{5,16}$/)
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|\\;:'",.<>/?]).{6,}$/)
  
  ]),
  confirmPassword:new FormControl(null,[
    Validators.required,
    Validators.minLength(6),
    // Validators.pattern(/^[A-Z][a-z-0-9]{5,16}$/)
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|\\;:'",.<>/?]).{6,}$/)
  
  ]),

})

signUp(formData:any){
console.log(formData);
console.log('-------------------------------------');


if(formData.valid){


this.auth.register(formData.value).subscribe({
next:(res)=>{
console.log(res);

this.is_mess=res.message;

// console.log(this.is_mess);

},
error:(err)=>{
console.log(err);
this.is_mess=err.error.message
  this['toastr'].error('Hello world!', 'Toastr fun!');
  this.toastr.error('Hello world!', 'Toastr fun!');
},
complete:()=>{
console.log('complet---->');
this.toastr.success('Hello world!', 'Toastr fun!');
}

})


}else{
  console.log('Invalid');
  
}
 
  
}
  
}
