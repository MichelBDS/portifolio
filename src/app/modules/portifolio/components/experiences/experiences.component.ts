import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong: "Desenvolvedor",
        p: "ICC - Instituto do Câncer do Ceará",
      },
      text: "<p>Desde de agosto de 2020, atuo como Analista de Sistema / Desenvolvedor, dando assistência no ERP TASY e como desenvolvedor Fullstack.</p>"
    },
    {
      summary:{
        strong: "Analista de Sistemas",
        p: "Hospital Gastroclinica",
      },
      text: "<p>Desde de agosto de 2012, atuo como Analista de Sistema / Desenvolvedor, dando assistência no ERP TASY e como desenvolvedor Fullstack.</p>"
    }
  ]);
}
