import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  

  constructor(private router:Router, private autService:AuthService){}

  ngOnInit(): void {
    let token=sessionStorage.getItem('token');

    if(token){
      this.router.navigate(['/dashboard']);
    }

  }
 
  loginUser(value:any){

    let {email,password}=value; 

    this.autService.login(email,password).subscribe(
      (response)=>{
        if(response.token){
          sessionStorage.setItem('token',response.token);
          this.router.navigate(['/dashboard']);
        }
      },
      (error)=>console.error("Ocurrio un error al hacer el login "+error),
      ()=> console.info('Petición terminada')
    )



    
  }
}
