import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Character, CharacterResponse } from '../../models/rickandmorty.models';

@Component({
  selector: 'app-zone',
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    AsyncPipe,
    FormsModule,
    IonCard,
    IonCardContent,
    IonButton,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonCardHeader,
    IonCardTitle,
  ],
  template: `
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Zone</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card>
        <ion-card-content>
          <h2 class="ion-text-center">Contador</h2>
          <h1 class="ion-text-center">
            {{ counter }}
          </h1>
          <div class="ion-text-center">
            <ion-button (click)="updateCounter()"> Aumentar </ion-button>
          </div>
          <div class="ion-text-center">Clicks {{ clicks }}</div>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title> Subscribe con variable normal </ion-card-title>
        </ion-card-header>
        <ion-list>
          @for (character of characters; track character.id) {
            <ion-item>
              <ion-avatar slot="start">
                <img [src]="character.image" [alt]="character.name" />
              </ion-avatar>
              <ion-label>
                {{ character.name }}
              </ion-label>
            </ion-item>
          }
        </ion-list>
      </ion-card>

      <!--<ion-card>
        <ion-card-header>
          <ion-card-title> Async Pipe </ion-card-title>
        </ion-card-header>
        <ion-list>
          @for (character of characters$ | async; track character.id) {
            <ion-item>
              <ion-avatar slot="start">
                <img [src]="character.image" [alt]="character.name" />
              </ion-avatar>
              <ion-label>
                {{ character.name }}
              </ion-label>
            </ion-item>
          }
        </ion-list>
      </ion-card>-->
    </ion-content>
  `,
  styles: ``,
})
export class ZonePage implements OnInit {
  private readonly http = inject(HttpClient);
  counter = 0;
  clicks = 0;
  characters: Character[] = [];
  characters$: Observable<Character[]> = this.http
    .get<CharacterResponse>('https://rickandmortyapi.com/api/character')
    .pipe(map((response) => response.results.slice(5, 10)));

  updateCounter() {
    this.counter++;
    this.clicks++;
  }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
      console.log(this.counter);
    }, 1000);

    this.http
      .get<CharacterResponse>('https://rickandmortyapi.com/api/character')
      .subscribe((response) => {
        this.characters = response.results.slice(0, 5);
      });
  }
}
