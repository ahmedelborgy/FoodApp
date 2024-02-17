import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../authService/auth.service';
import { Login } from '../moduleAut/login';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 

  is_message:string='';
  toastrService: any;
constructor(private auth:AuthService,private toastr: ToastrService){

}


  // ----------Reactive Forme------------ 
loginForm=new FormGroup({
    email:new FormControl(null,[
    Validators.required,
    Validators.email,
    Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

  ]),

  password:new FormControl(null,[
    Validators.required,
    Validators.minLength(6),
    // Validators.pattern(/^[A-Z][a-z-0-9]{5,16}$/)
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|\\;:'",.<>/?]).{6,}$/)
  
  ])
})







// -----------Method signIn()
signIn(loginForm:any){


if(this.loginForm.valid){
  console.log('-----valid---');
  console.log(loginForm.value);
  this.auth.logIn(loginForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      
      // console.log(res.message);
    },
    error:(err)=>{
      console.log(err);
      
      console.log(err.error.message);
      this.is_message=err.error.message;
      this.toastr.error('Hello world!', 'Toastr fun!');
       this.toastrService.error('everything is broken', 'Major Error', {
        positionClass: 'toast-top-left',
      });

      

     
    },
    complete:()=>{
      console.log('---------complet------------')
      this.is_message='sucsses'
     
       this.toastr.success('Hello world!', 'Toastr fun!');
    
    
    }

  })
}

else{
  console.log('-----In valid---');
}


}






}
function showToast(arg0: string, arg1: string, arg2: string): string | undefined {
  throw new Error('Function not implemented.');
}

