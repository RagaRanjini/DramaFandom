import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  UsersList:any;
  currentlang:string="English"
  languages:any=[
    {name:"English",value:"English"},
    {name:"French",value:"French"},
    {name:"Korean",value:"Korean"},
    {name:"Chinese",value:"Chinese"},
    {name:"Japanese",value:"Japanese"}
  ]
  constructor(private as:AuthenticationService,private fb:FormBuilder, private router:Router,private ts:TranslateService){
    this.ts.use(this.currentlang)
    // validations
    this.signupform = this.fb.group({
      email:['',[Validators.required, Validators.pattern("^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],
      username: ['', [Validators.required, Validators.minLength(5), Validators.pattern("^[a-z0-9]+$")]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.pattern("^[0-9]{6,6}")]]
    });
    
    //storing list of users
    this.as.getUsersList().subscribe(
      {
        next:(data:any)=>{
          this.UsersList=data;
          this.existinguser()
        },
        error:()=>this.UsersList=[]
      }
    ) 
  }
  changelang():void{
    this.ts.use(this.currentlang)
  }
  signin:boolean=true; //currently login form
  signup:boolean=false;
  login(){
    this.signin=true;
    this.signup=false;
  }
  register(){
    this.signin=false; //login hides, signup form displays
    this.signup=true;
  }
  email: any;
  password: any;
  userfound:boolean=false;
  usertype:any;
  error:any;
  getusername(){
    return sessionStorage.getItem('username');
  }
  existinguser(){
    this.error=[];
    //checks for empty fields
    if(this.email==undefined||this.password==undefined){
      this.error.push("Please fill out all the fields")
    }else{
      //verifying login credentials
      for (let user of this.UsersList) {
        if(user.email==this.email&&user.password==this.password){
          this.usertype=user.type;
          this.userfound=true;
          sessionStorage.setItem('email',user.email)
          sessionStorage.setItem('username',user.username)
          sessionStorage.setItem('usertype',user.type)
          alert("Hello "+this.getusername()+"! You are logged in");
        }
      }
      //according to the type of user, routing happens
      if(this.userfound==true){
        if(this.usertype=="user"){
          this.router.navigate(['userside/home'])
        }
        if(this.usertype=="admin"){
          this.router.navigate(['adminside/home'])
        }
      }else{
        //if login credentials is not found
        this.error.push("Incorrect username or password")
      }
    }
  }
  signupform:any;
  existing:any;
  newuser(){
    if (this.signupform.valid){
      //checking if this email id is already an user
      for(let x of this.UsersList){
        if(x.email==this.signupform.value.email){
          this.existing=true;
        }
      }
      //if it is a new user, data gets posted
      if(this.existing!=true){
        var data={
          email: this.signupform.value.email,
          username: this.signupform.value.username,
          password: this.signupform.value.password,
          type: "user"
        }
        this.as.newuser(data).subscribe(
          {
            next: (data:any)=>{
              alert("Drama Fandom welcomes you..")
              location.reload()
            },
            error:()=>{
              alert("Some error")
              location.reload()
            }
          }
        )
      }
    }
    
  }
}
