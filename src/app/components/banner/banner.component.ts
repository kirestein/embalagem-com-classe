import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit, AfterViewInit, OnDestroy {
  // Estatísticas animadas
  stats = [
    { number: 28, label: 'Anos de Experiência', suffix: '+' },
    { number: 1000, label: 'Projetos Realizados', suffix: '+' },
    { number: 50, label: 'Clientes Satisfeitos', suffix: '+' }
  ];

  // Controle de animação dos números
  animatedStats = [
    { current: 0, target: 28, suffix: '+' },
    { current: 0, target: 1000, suffix: '+' },
    { current: 0, target: 50, suffix: '+' }
  ];

  private animationInterval: number | undefined;
  isVisible = false;
  isContentReady = false;
  isFullyLoaded = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Aguardar carregamento completo do DOM
    this.waitForFullLoad();
  }

  ngAfterViewInit() {
    // Verificar se tudo está pronto após a view ser inicializada
    this.checkReadiness();
  }

  ngOnDestroy() {
    if (this.animationInterval !== undefined) {
      clearInterval(this.animationInterval);
      this.animationInterval = undefined;
    }
  }

  private waitForFullLoad() {
    // Aguardar carregamento completo da página
    if (document.readyState === 'complete') {
      this.onDocumentReady();
    } else {
      window.addEventListener('load', () => {
        this.onDocumentReady();
      });
    }
  }

  private onDocumentReady() {
    this.isFullyLoaded = true;
    this.checkReadiness();
  }

  private checkReadiness() {
    // Aguardar um frame para garantir que tudo foi renderizado
    requestAnimationFrame(() => {
      // Aguardar mais um pouco para garantir estabilidade
      setTimeout(() => {
        this.isContentReady = true;
        this.cdr.detectChanges();
        
        // Iniciar animações após um pequeno delay
        setTimeout(() => {
          this.startAnimations();
        }, 300);
      }, 100);
    });
  }

  private startAnimations() {
    this.isVisible = true;
    this.animateNumbers();
    this.cdr.detectChanges();
  }

  private animateNumbers() {
    const duration = 2000; // 2 segundos
    const steps = 60; // 60 frames
    const stepDuration = duration / steps;
    let currentStep = 0;

    this.animationInterval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = this.easeOutCubic(progress);

      this.animatedStats.forEach((stat) => {
        stat.current = Math.floor(stat.target * easeProgress);
      });

      if (currentStep >= steps) {
        if (this.animationInterval !== undefined) {
          clearInterval(this.animationInterval);
          this.animationInterval = undefined;
        }
        // Garantir que os valores finais sejam exatos
        this.animatedStats.forEach((stat) => {
          stat.current = stat.target;
        });
      }
    }, stepDuration);
  }

  private easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  // Método para scroll suave para a próxima seção
  scrollToNext() {
    const nextSection = document.querySelector('app-about, app-products, app-contact');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Se não encontrar seções específicas, rola para baixo
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  }

  // Método para navegação para contato
  goToContact() {
    const contactSection = document.querySelector('app-contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Método para navegação para produtos
  goToProducts() {
    const productsSection = document.querySelector('app-products');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
