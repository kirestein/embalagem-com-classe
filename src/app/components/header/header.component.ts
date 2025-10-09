import { Component, ElementRef, ViewChild, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  
  isMobileMenuOpen = false;
  isScrolled = false;
  activeSection = 'home';
  private routerSubscription!: Subscription;

  constructor(public router: Router) {}

  ngOnInit() {
    // Detectar scroll para efeitos visuais
    this.checkScroll();
    
    // Detectar mudanças de rota
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveSection();
      });
    
    // Inicializar seção ativa
    this.updateActiveSection();
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
    this.detectActiveSection();
  }

  private checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  private updateActiveSection() {
    // Se estiver na página de produtos
    if (this.router.url === '/products') {
      this.activeSection = 'products';
      return;
    }
    
    // Se estiver na home, detectar seção por scroll
    if (this.router.url === '/') {
      this.detectActiveSection();
    }
  }

  private detectActiveSection() {
    // Só detectar se estiver na home
    if (this.router.url !== '/') {
      return;
    }

    const sections = [
      { id: 'about-section', name: 'about' },
      { id: 'contact-section', name: 'contact' }
    ];

    const scrollPosition = window.pageYOffset + 100; // offset para o header
    
    // Se estiver no topo, é home
    if (scrollPosition < 300) {
      this.activeSection = 'home';
      return;
    }

    // Verificar qual seção está visível
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section.id);
      
      if (element) {
        const elementTop = element.offsetTop;
        if (scrollPosition >= elementTop - 50) {
          this.activeSection = section.name;
          return;
        }
      }
    }
  }

  // Navegação para produtos (página separada)
  navigateToProducts() {
    this.router.navigate(['/products']);
    this.closeMobileMenu();
  }

  // Navegação para seções da home page
  scrollToSection(sectionId: string) {
    // Se não estiver na home, navegar primeiro
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement(sectionId);
        }, 100);
      });
    } else {
      this.scrollToElement(sectionId);
    }
    this.closeMobileMenu();
  }

  private scrollToElement(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // altura do header fixo
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  // Controle do menu mobile
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // Navegação para home
  navigateToHome() {
    if (this.router.url === '/') {
      // Se já estiver na home, volta ao topo
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Se não estiver na home, navega para ela
      this.router.navigate(['/']);
    }
    this.closeMobileMenu();
  }

  // Métodos auxiliares para verificar seção ativa
  isHomeActive(): boolean {
    return this.activeSection === 'home';
  }

  isAboutActive(): boolean {
    return this.activeSection === 'about';
  }

  isProductsActive(): boolean {
    return this.activeSection === 'products';
  }

  isContactActive(): boolean {
    return this.activeSection === 'contact';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // Fechar menu mobile ao clicar fora
    if (this.isMobileMenuOpen && this.mobileMenu) {
      const target = event.target as HTMLElement;
      if (!this.mobileMenu.nativeElement.contains(target)) {
        this.closeMobileMenu();
      }
    }
  }
}