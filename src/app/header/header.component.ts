import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'header',
  standalone: true,
  imports: [
    CommonModule,
    TopMenuComponent,
    MainMenuComponent,
    SearchBarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
