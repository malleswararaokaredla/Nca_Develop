import { Component, OnInit, Input, HostListener } from '@angular/core';
import{ActivatedRoute,Router}from '@angular/router';
import{HotclientsComponent}from '../hotclients/hotclients.component';
import { NcaAdminService } from '../Admin/nca-admin.service';
import { LocalStorageService } from 'angular-web-storage';
import { LoandataDto } from '../modal/LoandataDto';
import * as CryptoJS  from 'crypto-js';
import{EncrDecrService}from '../encr-decr.service'
@Component({
  selector: 'ngx-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  // @Input() hotclient:HotclientsComponent;
  // @HostListener('click')
  disable:boolean;
  loading:boolean=false;
  dscid:any;
  disableHotdata:boolean;
  clientName:any;
  clientStatusName:any;
  clientHeader:string;
  statusChangeDate:string;
  userId:any;
  pageType:string='N';
  hotClientInfo:any={};
  email:string;
  loaddata:LoandataDto={
    Id:"",
    DSCId: 0,
    ClientId:"",
    FirstName:"",
    LastName:"",
    Address:"",
    City:"",
    State:"",
    Zip:"",
    SSN:"",
    DOB:"",
    HomePhone:"",
    WorkPhone: "",
    OtherPhone: "",
    Emai:"",
    CoClientFirstName:"",
    CoClientLastName:"",
    CoClientAddress:"",
    CoClientCity:"",
    CoClientState:"",
    CoClientZip:"",
    CoClientSSN:"",
    CoClientDOB:"",
    CoClientHomePhone:"",
    CoClientWorkPhone:"",
    CoClientOtherPhone:"",
    CoClientEmail:"",
    DraftAmount:"",
    ESCCHK:"",
    BankName:"",
    BankRoutingNum:"",
    BankAccountNum:"",
    RBANK:"",
    TCNO:"",
    CEMAIL:"",
    BANKID:"",
    ClientStatus:"",
    CreatedOn:"",
    CreatedBy:"",
    ModifiedOn:"",
    ModifiedBy:"",
    Status:"",
    AssignedNegotiatorId:"",
    AssignedNegotiatorName:"",
    AssignedAgentId:"",
    AssignedAgentName:"",
    RejectedDispositionsId:"",
    Rejected_Reason:"",
    StatusChangeDate:"",
    DisqualiiedReasonID:"",
    Disqualiied_Reason:"",
    RecentClientStatus:"",
    ClientStatusName:"",
    DTELDREC:"",
    AccountType:"",
    CBLP:"",
    EstimatedLoanAmount:"",
    DSCLoanTerm:"",
    Expiration_Date:"",
    ActiveSettlements:"",
    ShowVerificationTab:"",
    ShowEXVerificationTab:"",
    ShowEQVerificationTab:"",
    ShowReQualificationLabel:"",
    Show250FeeClientLabel:"",
    PersonalLoanSummaryId:"",
    ShowMeBureauReport:"",
    ShowMeBureauRepull:"",
    LoanNumber:"",
    MaturityDate:"",
    TUCreditReportId:"",
    TUCoCreditReportId:"",
    EXCreditReportId:"",
    EXCoCreditReportId:"",
    EQCreditReportId:"",
    EQCoCreditReportId:"",
    ShowReQualificationBanner:"",
    COADataValue:"",
    COAErrorList:"",
   }
  conversionOutput: string;
  constructor(private localstorage:LocalStorageService,private activatedRoute:ActivatedRoute,private route:Router,
    private ncaService:NcaAdminService,private EncDer:EncrDecrService) {
    
   }
  ngOnInit() {
    this.disable=true;
    this.disableHotdata=false;
    this.clientHeader='Client List';

    this.activatedRoute.queryParams.subscribe(params=>{      
    this.dscid=params['dscClientId'];
    this.clientName=params['clientName'];
    this.clientStatusName=params['clientStatusName'];
   
    if(this.dscid!=undefined){
    this.disable=false;
    this.disableHotdata=true;
    this.clientHeader='	Client Details';
    this.GethotClientDetails();
    }
    })
    
    
  }

  refload(){    
    this.disable=false;
    this.disableHotdata=true;
    this.clientHeader='	Client Details';
    
    // this.activatedRoute.queryParams.subscribe(params=>{            
    //   this.dscid=params['dscClientId'];
    //   this.clientName=params['clientName'];
    //   this.clientStatusName=params['clientStatusName'];
      
    //   if(this.dscid!=undefined){
    //   this.disable=false;
    //   this.disableHotdata=true;
    //   this.clientHeader='	Client Details';
    //   }
    //   })
    //this.route.navigateByUrl('/pages/Nca')
  }
  backload(){
    this.disable=true;
    this.disableHotdata=false;
    this.clientHeader='	Client List';
 
  }

  GethotClientDetails(){
   console.log(this.localstorage.get('dscClientid'));
   this.userId=this.localstorage.get('userid');
   this.dscid=1160119;
   this.loading=true;
    this.ncaService.GetClientDetails(this.dscid,this.userId,this.pageType).subscribe(res=>{
      console.log(res);
      console.log(res[0]['loandata']);
      this.statusChangeDate=res[0]['loandata'][0]['statusChangeDate'];
      this.clientStatusName=res[0]['loandata'][0]['clientStatusName'];
      this.dscid=res[0]['loandata'][0]['id'];
      this.hotClientInfo=res[0]['loantype'];
      
      // var encrypted = this.EncDer.set('123456$#@$^@1ERF', res[0]['loandata'][0]['email']);
      // var decrypted = this.EncDer.get('123456$#@$^@1ERF', encrypted);
     
      // console.log('Encrypted :' + encrypted);
      // console.log('Encrypted :' + decrypted);    
      //  console.log(this.loaddata);
      //  console.log(res[0]['loandata'][0]['email']);
       this.loaddata=res[0]['loandata'];
       this.loading=false;

    },error=>{
      console.log(error);    
      this.loading=false;  
    }
    )
   }

}
