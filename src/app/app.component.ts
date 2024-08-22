import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'mail' },
    { title: 'Servicios', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Quienes somos?', url: '/folder/favorites', icon: 'heart' },
    { title: 'Contacto', url: '/folder/archived', icon: 'mail' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
