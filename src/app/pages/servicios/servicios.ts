import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios {
  contactWhatsApp(serviceName: string) {
    const message = `Hola, me interesa obtener información sobre: ${serviceName}`;
    const whatsappUrl = `https://wa.me/525510264291?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  servicios = [
    {
      icon: 'fence',
      title: 'Malla Ciclónica',
      description: 'Medida estándar o medidas específicas según sus necesidades',
      features: ['Durabilidad', 'Resistencia', 'Fácil instalación']
    },
    {
      icon: 'grid_on',
      title: 'Rejacero (Euroreja)',
      description: 'Sistema de protección robusto y confiable',
      features: ['Alta resistencia', 'Diseño modular', 'Fácil mantenimiento']
    },
    {
      icon: 'security',
      title: 'Concertina',
      description: 'Sistema de seguridad perimetral de alta efectividad',
      features: ['Máxima seguridad', 'Instalación profesional', 'Durabilidad extrema']
    },
    {
      icon: 'straighten',
      title: 'Cinta Plástica',
      description: 'Solución económica para delimitación de espacios',
      features: ['Costo efectivo', 'Fácil instalación', 'Múltiples colores']
    },
    {
      icon: 'call_made',
      title: 'Concertina Tipo Recta y Arpón',
      description: 'Variantes especializadas para diferentes aplicaciones',
      features: ['Versatilidad', 'Instalación especializada', 'Máxima protección']
    },
    {
      icon: 'fiber_manual_record',
      title: 'Alambre de Púas',
      description: 'Sistema de disuasión adicional para mayor seguridad',
      features: ['Disuasión visual', 'Fácil instalación', 'Costo accesible']
    },
    {
      icon: 'door_front',
      title: 'Puertas y Zaguanes',
      description: 'Puertas y zaguanes de malla o rejacero personalizados',
      features: ['Diseño personalizado', 'Instalación profesional', 'Funcionalidad completa']
    }
  ];
}
