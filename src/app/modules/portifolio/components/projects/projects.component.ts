import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Component
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

   public arrayProjects = signal<IProjects[]>([
    {
     src:'assets/img/projects/vfull.png',
     alt: "Projeto Vida FullStack",
     title: "Vida FullStack",
     width: '100px',
     height: '51px',
     description: '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
     links: [
      {
        name: 'Conhecça o Blog',
        href: 'https://vidafullstack.com.br'
      },
     ],
    },
    {
      src:'assets/img/projects/vfull.png',
      alt: "BG Feirão",
      title: "Administração BG Feirão",
      width: '100px',
      height: '51px',
      description: '<p>Sistema feito para administrar contratos e mensalidades de contrato de manutenção com as lojas do prédio BG Feirão no centro de Fortaleza - CE.</p>',
      links: [
       {
         name: 'Conheça o Sistema BGFeirão',
         href: 'https://system.bgfeirao.com/public/'
       },
      ],
     },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
