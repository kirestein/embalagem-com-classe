import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
  // Dados dos cards de características
  features = [
    {
      icon: '🧬',
      title: 'Inovação',
      description: 'Tecnologia de ponta em processos de fabricação',
      color: 'primary'
    },
    {
      icon: '🛡️',
      title: 'Qualidade',
      description: 'Processos rigorosos de controle de qualidade',
      color: 'secondary'
    },
    {
      icon: '🌱',
      title: 'Sustentabilidade',
      description: 'Materiais biodegradáveis e eco-friendly',
      color: 'primary'
    },
    {
      icon: '⏰',
      title: '24h',
      description: 'Operação contínua para atender demandas',
      color: 'secondary'
    }
  ];

  // Dados dos valores da empresa
  values = [
    'Ser parceiro',
    'Estar presente', 
    'Dar soluções',
    'Auxiliar',
    'Ajudar',
    'Acompanhar'
  ];

  // Dados dos segmentos atendidos
  segments = [
    { icon: '🧴', name: 'Cosméticos' },
    { icon: '💊', name: 'Farmacêutico' },
    { icon: '🧼', name: 'Higiene' },
    { icon: '🚗', name: 'Automotivo' },
    { icon: '⚗️', name: 'Químico' },
    { icon: '🍽️', name: 'Alimentício' }
  ];

  // Estatísticas da empresa
  stats = [
    { number: 28, label: 'Anos de Experiência', suffix: '+' },
    { number: 6, label: 'Segmentos Atendidos', suffix: '' },
    { number: 24, label: 'Horas de Operação', suffix: 'h' },
    { number: 100, label: 'Projetos Anuais', suffix: '+' }
  ];

  // Controle de animações
  isVisible = false;
  private observer: IntersectionObserver | undefined;

  ngOnInit() {
    // Configurar observer para animações quando o componente entra na viewport
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.isVisible = true;
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      // Observar o elemento principal após um pequeno delay
      setTimeout(() => {
        const element = document.querySelector('.about-container');
        if (element && this.observer) {
          this.observer.observe(element);
        }
      }, 100);
    } else {
      // Fallback para ambientes sem IntersectionObserver
      setTimeout(() => {
        this.isVisible = true;
      }, 500);
    }
  }

  // Método para obter a classe de cor baseada no tipo
  getColorClass(color: string): string {
    return color === 'primary' ? 'feature-primary' : 'feature-secondary';
  }

  // Método para obter a classe de valor alternada
  getValueClass(index: number): string {
    return index % 2 === 0 ? 'value-primary' : 'value-secondary';
  }
}
