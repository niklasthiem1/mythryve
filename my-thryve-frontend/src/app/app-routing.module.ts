import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewWrapperComponent } from './overview/overview-wrapper/overview-wrapper.component';

import { IncomeWrapperComponent } from './income/income-wrapper/income-wrapper.component';

const routes: Routes = [
  { path: 'overview', component: OverviewWrapperComponent },
  { path: 'income', component: IncomeWrapperComponent },
  { path: 'expense', component: OverviewWrapperComponent },
  { path: 'goals', component: OverviewWrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
