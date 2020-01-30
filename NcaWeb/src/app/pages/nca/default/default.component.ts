import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import{NcaAdminService}from '../Admin/nca-admin.service';
import { LocalStorageService } from 'angular-web-storage';
import{HttpClient}from '@angular/common/http';
import { Router } from '@angular/router';
import{FormGroup,FormBuilder,Validator, Validators}from '@angular/forms';
import{clientDto}from '../modal/clientDto';
import{Clients_Data}from '../modal/Clients_Data';

@Component({
  selector: 'ngx-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  loading = false;
  h_loading=false;
  clienForm:FormGroup;
  _clientDto:clientDto={
    client_status:0,
    days_type:0,
    dsc_agent:null,
    UserId:null,
    RoleId:0,
    DSCId:0,
    DSCClientId:null,
    FirstName:null,
    LastName:null,
    HomePhone:null,
    Email:null,
    State:null,
    NegotiatorName:null,
    DSCAgentName:null,
    SortColumn:null,
    SortDirection:null,
    PageNo:0,
    RowCountPerPage:0,
    Timezone:null
  }
  settings = {
    actions: false,
    pager : false,     
    columns: {
      id: {
        title: 'Client ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      homePhone: {
        title: 'Home Phone',
        type: 'string',
      },
      state: {
        title: 'State',
        type: 'string',
      },
      timezone: {
        title: 'Time Zone',
        type: 'string',
      },
      status:{
        title:'Status',
        type:'number',
      },
      statusDate:{
        title:'Status Date',
        type:'string',
      },
      lastCallDate:{
        title:'Last call Date',
        type:'string',
      },
      dscAgentName:{
        title:'Dsc Agent',
        type:'string',
      },
      calls:{
        title:'Calls',
        type:'string',
      },
      creditors:{
        title:'Creditors',
        type:'string',
      },
      negotiatorName:{
        title:'Negotiator',
        type:'string',
      },
    },
  };
Timezone=[
  {
    id:0,
   value:'All'
  },
  {
    id:1,
    value:'AKST',
  },
  {
    id:2,
    value:'CST',
  },
  {
    id:3,
    value:'EST',
  },
  {
    id:4,
    value:'HST',
  },
  {
    id:5,
    value:'MST',
  },
  {
    id:6,
    value:'PST',
  }

]
Timeperiod=[
  {id:0,
  value:'[All]'
 },
  {id:0,
    value:'7 days'
  },
  {id:0,
      value:'30 days'
  },
  {id:0,
    value:'60 days'
  },
  {id:0,
    value:'Curren Month'
  },
]  

Clientstatus=[
  {
    id:0,
    value:'All'
  }
]
  source: LocalDataSource = new LocalDataSource();
  userPwd: any;
  userId:string;
  dscId:number;
  hotClientData:any={};
  
  _clientsInfo:any={};
  constructor(private service: SmartTableData,private ncaService:NcaAdminService,private router: Router, private localstorage:LocalStorageService
    ,private http:HttpClient,private formBuilder:FormBuilder) {
    
   }



  emailPattern: string = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}';
  ngOnInit() {
    
    this.clienForm=this.formBuilder.group({
      client_status:[''],
      FirstName:[''],
      LastName:[''],
      HomePhone:[''],
      Email:['',Validators.pattern(this.emailPattern)],
      State:[''],
      NegotiatorName:[''],    
      DSCAgentName:[''],
      Timezone:['']
    })
    this.userPwd=this.localstorage.get('userPwd');
    this.userId=this.localstorage.get('userid');
    this.dscId=1;
    
    if(this.userPwd==null){    
       this.router.navigateByUrl('/auth/nca-login');
     }
     else{
       this.btnsearch
      
     }
    this.HotClients();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  HotClients(){
    this.h_loading=true;
    this.ncaService.getVisitedClients(this.userId,this.dscId).subscribe(res=>{          
      // this.hotClientData=+'<a href="'+res+'">Link</a>';
       console.log(res);      
       this.h_loading=false;
      var  temp:any=[];
      for(let i=0;i<res.length;i++){
        var obj={
          
          dscClientId:res[i].dscClientId,
          clientName:res[i].clientName,
        }
        temp.push(obj);
      }
      this.hotClientData=temp;
    })
  }

  btnsearch(){
   this._clientDto.client_status=2//this.clienForm.value['client_status'];
   this._clientDto.FirstName=null//this.clienForm.value['FirstName'];
   this._clientDto.LastName=null//this.clienForm.value['LastName'];
   this._clientDto.HomePhone=null//this.clienForm.value['HomePhone'];
   this._clientDto.Email=null//this.clienForm.value['Email'];
   this._clientDto.State=null//this.clienForm.value['State'];
   this._clientDto.NegotiatorName=null//this.clienForm.value['NegotiatorName'];
   this._clientDto.DSCAgentName=null//this.clienForm.value['DSCAgentName'];
   this._clientDto.Timezone=this.clienForm.value['Timezone'];
   this._clientDto.UserId="TekSMGDSCAgent@tek.com"//this.userId;
   this._clientDto.RoleId=10;
   this._clientDto.DSCId=7;
   this._clientDto.DSCClientId=null;
   this._clientDto.SortColumn="FirstName, LastName";
   this._clientDto.SortDirection="ASC";
   this._clientDto.PageNo=1
   this._clientDto.RowCountPerPage=500;
   this._clientDto.Timezone=null;
   console.log(this._clientDto);
   
   this.loading=true;
   this.ncaService.getAllClients(this._clientDto).subscribe(res=>{
     console.log(res);
     this._clientsInfo=res;
     //const data =res// this.localstorage.get("clientdata");//this.service.getData(); //
     
      this.source.load(this._clientsInfo);
      this.loading=false;
      console.log(this._clientsInfo.length);
   });
  }

}
