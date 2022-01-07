import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWrapperComponent } from './layout-wrapper/layout-wrapper.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [LayoutWrapperComponent, MenuItemComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
  ],
  exports: [LayoutWrapperComponent],
})
export class LayoutModule {}
