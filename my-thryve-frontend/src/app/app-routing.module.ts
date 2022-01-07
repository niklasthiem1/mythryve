import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisWrapperComponent } from './analysis/analysis-wrapper/analysis-wrapper.component';

import { OverviewWrapperComponent } from './overview/overview-wrapper/overview-wrapper.component';

const routes: Routes = [
  { path: 'overview', component: OverviewWrapperComponent },
  { path: 'analysis', component: AnalysisWrapperComponent },

  { path: 'goals', component: OverviewWrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
