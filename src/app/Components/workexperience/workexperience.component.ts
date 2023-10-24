import { Component ,OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/Models/Model';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {


  workExpList:WorkExperience[] =[
  
  {
    role:'Trainee Software Developer',
    company:'PRM Soft Solutions Pvt. LTD.',
    duration:'July 2022 - february 2023',
    description: [
      'Worked With Multiple teams to develop desktop and web applications',
      'worked on different technologies such as (dotnet ,C++,Java)'
  
    ],
  },
  
  
  {
    role:'Junior Software Developer',
    company:'PRM Soft Solutions Pvt. LTD.',
    duration:'february 2023 - present',
    description: [
      'Worked With Multiple teams to develop desktop and web applications',
      'worked on different technologies such as (dotnet ,C++,Java)'
  
    ],
  },
  
  ];
  
  constructor(){}
  
  ngOnInit(): void {
      
  }
  
  }
  
