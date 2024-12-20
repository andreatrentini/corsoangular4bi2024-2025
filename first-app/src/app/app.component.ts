import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimoComponenteComponent } from './primo-componente/primo-componente.component';
import { SliderComponent } from './slider/slider.component';
import { StruttureComponent } from './strutture/strutture.component';
import { StudentiComponent } from './studenti/studenti.component';
import { SignalsComponent } from './signals/signals.component';
import { CampionatoComponent } from './campionato/campionato.component';
import { PlaylistComponent } from './playlist/playlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimoComponenteComponent, SliderComponent, StruttureComponent, StudentiComponent,
    SignalsComponent, CampionatoComponent, PlaylistComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
