import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatButtonModule, RouterModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = [
    { label: 'Inicio', route: '/inicio' },
    { label: 'Servicios', route: '/servicios' },
    { label: 'Contacto', route: '/contacto' }
  ];
}
