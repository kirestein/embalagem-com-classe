import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  // Links do mapa do site
  siteMapLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Produtos', href: '#products' },
    { name: 'Contato', href: '#contact' }
  ];

  // Informações de contato
  contactInfo = {
    email: 'embaclass@embaclass.com.br',
    phone: '+55 11 1234-5678',
    address: 'Barueri, SP - Brasil'
  };

  // Método para abrir link do Instagram
  openInstagram() {
    window.open('https://www.instagram.com/embaclass/', '_blank');
  }

  // Método para abrir relatório de igualdade
  openEqualityReport() {
    window.open('igualdade_salarial.png', '_blank');
  }

  // Método para scroll suave para seções
  scrollToSection(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
