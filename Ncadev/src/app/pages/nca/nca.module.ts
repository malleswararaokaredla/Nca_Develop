import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbActionsModule,
  NbRadioModule,
  NbSpinnerModule,
  NbCheckboxModule,  
  NbMenuModule  
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
//import { LoginComponent } from './login/login.component';
import { NCAComponent } from './nca.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NbAuthModule }from '@nebular/auth';
import { DefaultComponent } from './default/default.component';
import { NcaRoutingModule } from './nca-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HotclientsComponent } from './hotclients/hotclients.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { HotClientInfoComponent } from './hot-client-info/hot-client-info.component';

@NgModule({
  imports: [
    CommonModule,
    NbProgressBarModule,
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxChartsModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    NbAuthModule,
    NcaRoutingModule,
    Ng2SmartTableModule,
    NbSpinnerModule,
    NbCheckboxModule,
    NbMenuModule.forRoot()
    
  ],
  declarations: [ NCAComponent, DefaultComponent, HotclientsComponent, ClientlistComponent, HotClientInfoComponent],
})
export class NcaModule { }
