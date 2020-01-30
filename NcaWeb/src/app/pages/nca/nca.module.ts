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
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
//import { LoginComponent } from './login/login.component';
import { NCAComponent } from './nca.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{NbPasswordAuthStrategy,NbAuthModule}from '@nebular/auth';
import { DefaultComponent } from './default/default.component';
import { NcaRoutingModule } from './nca-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

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
    NbCheckboxModule
  ],
  declarations: [NCAComponent, DefaultComponent],
})
export class NcaModule { }
