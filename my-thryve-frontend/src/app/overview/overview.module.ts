import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewWrapperComponent } from './overview-wrapper/overview-wrapper.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [OverviewWrapperComponent],
  imports: [CommonModule, MatGridListModule],
})
export class OverviewModule {}
