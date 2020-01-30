import { Component, OnInit, Input } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { LocalStorageService } from 'angular-web-storage';
import { NcaAdminService } from '../Admin/nca-admin.service';
import { Router } from '@angular/router';
import{LoandataDto}from '../modal/LoandataDto';
@Component({
  selector: 'ngx-hot-client-info',
  templateUrl: './hot-client-info.component.html',
  styleUrls: ['./hot-client-info.component.scss']
})
export class HotClientInfoComponent implements OnInit {
  dscClientid:any;
  userId:any;
  @Input()loaddata:LoandataDto;
  pageType:string='N';
  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link:'',
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
      link: '',
    }
   ];
 
  constructor(private localstorage:LocalStorageService,private ncaService:NcaAdminService,private router:Router) { }
  ngOnInit() {
  // this.dscClientid=this.localstorage.get('dscClientid');
  // this.userId=this.localstorage.get('userid');
  // console.log(this.localstorage.get('dscClientid'));
  //  if(this.dscClientid!=null){
  //    this.GethotClientDetails();
  //  }
 // console.log(this.loaddata);
  }

  

}
