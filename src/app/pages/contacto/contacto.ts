import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {
  contactInfo = [
    {
      icon: 'phone',
      title: 'Teléfonos',
      details: ['(56) 5029-4553', '(55) 1026 4291'],
      action: 'Llamar',
      actionUrl: 'tel:+525510264291'
    },
    {
      icon: 'email',
      title: 'Correo Electrónico',
      details: ['mallaaceroindustrial43@gmail.com'],
      action: 'Enviar Email',
      actionUrl: 'mailto:mallaaceroindustrial43@gmail.com'
    },
    {
      icon: 'chat',
      title: 'WhatsApp',
      details: ['(55) 1026 4291'],
      action: 'Chatear',
      actionUrl: 'https://wa.me/525510264291'
    }
  ];

  contactWhatsApp() {
    const message = 'Hola, me interesa obtener un presupuesto sin compromiso para malla ciclónica.';
    const whatsappUrl = `https://wa.me/525510264291?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
