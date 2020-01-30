import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { NcaAdminService } from '../Admin/nca-admin.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ClientDto } from '../modal/ClientDto';

@Component({
  selector: 'ngx-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent implements OnInit {
  loading = false;
  h_loading = false;
  clienForm: FormGroup;
  _ClientDto: ClientDto = {
    client_status: 0,
    days_type: 0,
    dsc_agent: null,
    UserId: null,
    RoleId: 0,
    DSCId: 0,
    DSCClientId: null,
    FirstName: null,
    LastName: null,
    HomePhone: null,
    Email: null,
    State: null,
    NegotiatorName: null,
    DSCAgentName: null,
    SortColumn: null,
    SortDirection: null,
    PageNo: 0,
    RowCountPerPage: 0,
    Timezone: null
  }
  settings = {
    actions: false,
    pager: false,
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
        title: 'Home_Phone',
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
      status: {
        title: 'Status',
        type: 'number',
      },
      statusDate: {
        title: 'Status_Date',
        type: 'string',
      },
      lastCallDate: {
        title: 'Last call Date',
        type: 'string',
      },
      dscAgentName: {
        title: 'Dsc Agent',
        type: 'string',
      },
      calls: {
        title: 'Calls',
        type: 'string',
      },
      creditors: {
        title: 'Creditors',
        type: 'string',
      },
      negotiatorName: {
        title: 'Negotiator',
        type: 'string',
      },
    },
  };
  Timezone = [
    {
      id: 0,
      value: 'All'
    },
    {
      id: 1,
      value: 'AKST',
    },
    {
      id: 2,
      value: 'CST',
    },
    {
      id: 3,
      value: 'EST',
    },
    {
      id: 4,
      value: 'HST',
    },
    {
      id: 5,
      value: 'MST',
    },
    {
      id: 6,
      value: 'PST',
    }

  ]
  Timeperiod = [
    {
      id: 0,
      value: '[All]'
    },
    {
      id: 0,
      value: '7 days'
    },
    {
      id: 0,
      value: '30 days'
    },
    {
      id: 0,
      value: '60 days'
    },
    {
      id: 0,
      value: 'Current Month'
    },
  ]

  Clientstatus = [
    {
      id: 0,
      value: 'All'
    }
  ]
  source: LocalDataSource = new LocalDataSource();
  userPwd: any;
  userId: string;
  dscId: number;
  hotClientData: any = {};
  _clientsInfo: any = {};
  emailPattern: string = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}';
  constructor(private service: SmartTableData, private ncaService: NcaAdminService, private router: Router, private localstorage: LocalStorageService
    , private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clienForm = this.formBuilder.group({
      client_status: [''],
      FirstName: [''],
      LastName: [''],
      HomePhone: [''],
      Email: ['', Validators.pattern(this.emailPattern)],
      State: [''],
      NegotiatorName: [''],
      DSCAgentName: [''],
      Timezone: ['']
    })
    this.userPwd = this.localstorage.get('userPwd');
    this.userId = this.localstorage.get('userid');
    this.dscId = 1;
    if (this.userPwd == null) {
      this.router.navigateByUrl('/auth/nca-login');
    }
    else {
      this.btnsearch();
    }
  }
  btnsearch() {
    this._ClientDto.client_status = 2//this.clienForm.value['client_status'];
    this._ClientDto.FirstName = null//this.clienForm.value['FirstName'];
    this._ClientDto.LastName = null//this.clienForm.value['LastName'];
    this._ClientDto.HomePhone = null//this.clienForm.value['HomePhone'];
    this._ClientDto.Email = null//this.clienForm.value['Email'];
    this._ClientDto.State = null//this.clienForm.value['State'];
    this._ClientDto.NegotiatorName = null//this.clienForm.value['NegotiatorName'];
    this._ClientDto.DSCAgentName = null//this.clienForm.value['DSCAgentName'];
    this._ClientDto.Timezone = this.clienForm.value['Timezone'];
    this._ClientDto.UserId = "TekSMGDSCAgent@tek.com"//this.userId;
    this._ClientDto.RoleId = 10;
    this._ClientDto.DSCId = 7;
    this._ClientDto.DSCClientId = null;
    this._ClientDto.SortColumn = "FirstName, LastName";
    this._ClientDto.SortDirection = "ASC";
    this._ClientDto.PageNo = 1
    this._ClientDto.RowCountPerPage = 500;
    this._ClientDto.Timezone = null;
    this.loading = true;
    this.ncaService.getAllClients(this._ClientDto).subscribe(res => {
      this._clientsInfo = res;
      //const data =res// this.localstorage.get("clientdata");//this.service.getData(); //      
      this.source.load(this._clientsInfo);
      this.loading = false;
    });
  }
}
