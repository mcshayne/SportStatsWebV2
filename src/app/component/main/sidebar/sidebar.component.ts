import { BinaryOperatorExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  protected dropdownContainerIsVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchDropdownContainerVisibility(){
    if(this.dropdownContainerIsVisible) {
      this.dropdownContainerIsVisible = false;
    }
    else {
      this.dropdownContainerIsVisible = true;
    }
  }

}
