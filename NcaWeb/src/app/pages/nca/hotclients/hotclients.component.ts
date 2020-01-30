import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { NcaAdminService } from '../Admin/nca-admin.service';
import{Router}from '@angular/router';

@Component({
  selector: 'ngx-hotclients',
  templateUrl: './hotclients.component.html',
  styleUrls: ['./hotclients.component.scss']
})
export class HotclientsComponent implements OnInit {

  // @HostBinding('class.is-open') @Input()
  // isOpen = false;
  disable: boolean;
  disableHotdata: boolean=false;
  dsclientid: any=0;
  client_Name:any;
  clientStatusName:any;
  constructor(private localstorage:LocalStorageService,private ncaService:NcaAdminService,private router:Router) { }
  userId:string;
  dscId:number;
  loading = false;
  h_loading=false;
  hotClientData:any={};
  ngOnInit() {
    this.userId=this.localstorage.get('userid');
    this.dscId=1;
    this.HotClients();
  }

  HotClients(){
    this.h_loading=true;
    this.ncaService.getVisitedClients(this.userId,this.dscId).subscribe(res=>{          
      // this.hotClientData=+'<a href="'+res+'">Link</a>';
        
       this.h_loading=false;
      var  temp:any=[];
      for(let i=0;i<res.length;i++){
        var obj={
          
          dscClientId:res[i].dscClientId,
          clientName:res[i].clientName,
          clientStatusName:res[i].clientStatusName
        }
        temp.push(obj);
      }
      this.hotClientData=temp;
    })
  }

  hotClientsData(data:any){
    this.disable=false;
    this.disableHotdata=true;
    this.dsclientid=data.dscClientId;
    this.localstorage.set(this.dsclientid,'dscClientid')
    this.client_Name=data.clientName;
    this.clientStatusName=data.clientStatusName;
    //this.router.navigateByUrl('/pages/Nca');
    this.router.navigate(['/pages/Nca'],{queryParams:{disableClients:this.disable,
      disableHotInfo:this.disableHotdata,dscClientId:this.dsclientid,
      clientName:this.client_Name,clientStatusName:this.clientStatusName}})
    }

}
