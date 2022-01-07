import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit, AfterViewInit {
  @Input() name: string = 'Hans';
  @Input() route: string = '/overview';
  @ViewChild('btnRef') buttonRef!: MatButton;

  constructor() {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {}
}
