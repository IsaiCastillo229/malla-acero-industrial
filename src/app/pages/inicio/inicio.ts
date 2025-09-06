import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterModule, CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {
  productImages = [
    {
      src: '/img/img1.png',
      alt: 'Malla Ciclónica',
      title: 'Malla Ciclónica',
      description: 'Protección perimetral de alta calidad'
    },
    {
      src: '/img/img2.png',
      alt: 'Rejacero',
      title: 'Rejacero',
      description: 'Sistema modular robusto'
    },
    {
      src: '/img/img3.png',
      alt: 'Concertina',
      title: 'Concertina',
      description: 'Máxima seguridad perimetral'
    },
    {
      src: '/img/img4.png',
      alt: 'Cinta Plástica',
      title: 'Cinta Plástica',
      description: 'Delimitación económica'
    },
    {
      src: '/img/img5.png',
      alt: 'Alambre de Púas',
      title: 'Alambre de Púas',
      description: 'Disuasión adicional'
    },
    {
      src: '/img/img6.png',
      alt: 'Puertas de Malla',
      title: 'Puertas de Malla',
      description: 'Acceso seguro y funcional'
    },
    {
      src: '/img/img7.png',
      alt: 'Instalación Profesional',
      title: 'Instalación Profesional',
      description: 'Servicio especializado'
    },
    {
      src: '/img/img8.png',
      alt: 'Proyecto Completado',
      title: 'Proyecto Completado',
      description: 'Resultados garantizados'
    }
  ];

  features = [
    {
      icon: 'security',
      title: 'Protección Garantizada',
      description: 'Mallas de alta calidad que brindan máxima seguridad'
    },
    {
      icon: 'build',
      title: 'Instalación Profesional',
      description: 'Servicio de instalación especializado y confiable'
    },
    {
      icon: 'verified',
      title: 'Calidad Certificada',
      description: 'Productos que cumplen con los más altos estándares'
    }
  ];
}
