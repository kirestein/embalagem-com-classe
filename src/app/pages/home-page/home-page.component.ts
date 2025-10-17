import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    WhatsappButtonComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
