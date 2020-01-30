import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbMenuModule } from '@nebular/theme';

const routes:Routes=[{

}]

@NgModule({
  imports: [RouterModule.forChild(routes),NbMenuModule.forRoot()],
  exports: [RouterModule],
})
export class NcaRoutingModule { }
