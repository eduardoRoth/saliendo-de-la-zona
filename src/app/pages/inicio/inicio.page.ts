import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonRow,
    IonCol,
    IonButton,
    RouterLink,
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Saliendo de la Zona</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Zone</ion-card-title>
          <ion-card-subtitle> ZoneJS para Change Detection </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>
            Usaremos ZoneJS para el control de cambios en Angular. Recuerda que
            debes de tener en tu <code>app.config.ts</code> el provider de Zone
            <code
              >provideZoneChangeDetection(&#123; eventCoalescing: true
              &#125;)</code
            >
          </p>
          <p>
            Además debes de tener en tu archivo <code>angular.json</code> el
            polyfill de zone.js:
            <code>"polyfills": ["zone.js"],</code>
          </p>
          <ion-row class="ion-justify-content-center">
            <ion-col size="auto">
              <ion-button routerLink="/zone">Ir al demo</ion-button>
            </ion-col>
          </ion-row>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Zoneless</ion-card-title>
          <ion-card-subtitle>Zoneless Change Detection</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>
            En este modo, utilizaremos el modo experimental de Angular para no
            utilizar ZoneJS en la detección de cambios. Hay que reemplazar el
            provider de Zone con el de Zoneless
            <code>provideExperimentalZonelessChangeDetection()</code> y eliminar
            ZoneJS de la propiedad polyfill en el archivo
            <code>angular.json</code>
          </p>
          <ion-row class="ion-justify-content-center">
            <ion-col size="auto">
              <ion-button routerLink="/zoneless">Ir al demo</ion-button>
            </ion-col>
          </ion-row>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
})
export class InicioPage {}
