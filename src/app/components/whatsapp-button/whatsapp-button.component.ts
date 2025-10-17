import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent {
  // Número do WhatsApp (substitua pelo número real)
  phoneNumber = '5511999999999'; // Formato: código do país + DDD + número
  
  // Mensagem padrão (opcional)
  defaultMessage = 'Olá! Gostaria de saber mais sobre os cursos da EmbaClass.';

  openWhatsApp() {
    const message = encodeURIComponent(this.defaultMessage);
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
}