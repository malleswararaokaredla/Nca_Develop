import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{NcaAdminService}from '../Admin/nca-admin.service';
import{LocalStorageService}from 'angular-web-storage';
import{DebtsettleCompnay}from '../modal/DebtsettleCompnay';
@Component({

  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 // protected service: NbAuthService;
 loading=false;
 show:boolean;
 @ViewChild('div',{static:false}) div: ElementRef;
 loginForm:FormGroup;
  submitted:boolean=false;
  userId:string;
  ipAddress:string;
  password:string;
  userPwd:string=null;
  failureMsg:string=null;
  clientFacingData:any[]=[];
  clientdata:string[]=[];

  _debtsettleCompnay:DebtsettleCompnay={
    deptid:0,
    dscName:null,
    reportType:null,
    status:0,
    ClientFacingName:null

  }
  constructor(private formbuilder:FormBuilder,private router: Router, private localstorage:LocalStorageService,private adminservice:NcaAdminService) { }

  ngOnInit() {
    this.localstorage.clear();
    this.loginForm=this.formbuilder.group({
      userId:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]]

    })
    
    
    if(this.userPwd!=null){
      this.router.navigateByUrl('/pages/Nca');
    }
  }
  get f(){return this.loginForm.controls};
 
  onSubmit(){    
    this.submitted=true;
    this.loading=true;
   if(this.loginForm.invalid){
     return
  
   }
   else{
     this.loading=false;
    this.userId=this.loginForm.value['userId'];
    this.password=this.loginForm.value['password'];
    this.ipAddress='::1';
    this.adminservice.userValidation(this.userId,this.password,this.ipAddress).subscribe(res=>{
     
     this.userPwd=res[0]["strUserPwd"];
     this.failureMsg=res[0]["failureMsg"];
     
     if(this.failureMsg==null){
      this.div.nativeElement.innerHTML="";
      this.localstorage.set('userPwd',this.userPwd);
      this.localstorage.set('userid',this.userId);
      this.chkLoginData();
       this.router.navigateByUrl('/pages/Nca');
     }
     else{
       this.show=false;
       this.div.nativeElement.innerHTML="Userid not exists";
      this.router.navigateByUrl('/auth/nca-login');
     }
    });
   }

  }

  validateFormfields(x){
    this.loginForm=x;
    this.loginForm=this.formbuilder.group({
      userId:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]]

    })
  }
  chkLoginData(){

    this.adminservice.checkLoginData(this.userId,this.userPwd,this.ipAddress).subscribe(res=>{
    
     
      // this.clientFacingData.forEach(row=>{
      //   // if(row["dscName"]!=null){
      //   //   this.clientdata.push(row["dscName"]);
      //   // }
      //   this._debtsettleCompnay.deptid=row["deptid"];
      //   this._debtsettleCompnay.dscName=row["dscName"];
      //   this._debtsettleCompnay.reportType=row["reportType"];
      //   this._debtsettleCompnay.status=row["status"];
      //   this._debtsettleCompnay.ClientFacingName=row["ClientFacingName"];
      
      // });
    
      this.clientFacingData=Object.assign(res[0]["ncadebtsettleCompnays"]);
     
    //   for(let i=0;i<=this.clientFacingData.length;i++){           
    //    this._debtsettleCompnay.deptid=res[0]["ncadebtsettleCompnays"][i]["deptid"];
    //    this._debtsettleCompnay.dscName=res[0]["ncadebtsettleCompnays"][i]["dscName"];
    //    this._debtsettleCompnay.reportType=res[0]["ncadebtsettleCompnays"][i]["reportType"];
    //    this._debtsettleCompnay.status=res[0]["ncadebtsettleCompnays"][i]["status"];
    //    this._debtsettleCompnay.ClientFacingName=res[0]["ncadebtsettleCompnays"][i]["ClientFacingName"];
    //  }
   
     this.localstorage.set('clientdata', res[0]["ncadebtsettleCompnays"]);
      //let cdata=JSON.parse(clientdata);
      this.clientdata=res[0]["ncadebtsettleCompnays"];
      this._debtsettleCompnay.ClientFacingName=this.clientdata["ClientFacingName"];
     
      // Object.keys(res[0]["ncadebtsettleCompnays"]).map(key=>(
      // this.clientFacingData.push({label:res[key]["clientFacingName"],value:res[key]["dscName"]})
      // ));
     
      
    })
  }
  
}
