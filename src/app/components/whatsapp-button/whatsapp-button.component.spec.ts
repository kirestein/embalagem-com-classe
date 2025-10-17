import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappButtonComponent } from './whatsapp-button.component';

describe('WhatsappButtonComponent', () => {
  let component: WhatsappButtonComponent;
  let fixture: ComponentFixture<WhatsappButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default phone number', () => {
    expect(component.phoneNumber).toBe('5511999999999');
  });

  it('should have default message', () => {
    expect(component.defaultMessage).toBe('Olá! Gostaria de saber mais sobre os cursos da EmbaClass.');
  });

  it('should open WhatsApp when button is clicked', () => {
    spyOn(window, 'open');
    component.openWhatsApp();
    expect(window.open).toHaveBeenCalledWith(
      jasmine.stringMatching(/https:\/\/wa\.me\/5511999999999\?text=/),
      '_blank'
    );
  });
});