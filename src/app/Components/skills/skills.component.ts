import { Component ,OnInit} from '@angular/core';
import { Skills } from 'src/app/Models/Model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill:Skills[]=[
  
    {
      name:'Angular',
      level:'Intermidate',
      rating:60,
    },
  
    {
      name:'ASP.NET Core web api',
      level:'Beginner',
      rating:40,
    },
  
    {
      name:'ASP.NET Waveform',
      level:'Intermidate',
      rating:70,
    },
  
    
    {
      name:'HTML,CSS,JS',
      level:'Intermidate',
      rating:70,
    },
  
  
    {
      name:'Bootstrap',
      level:'Intermidate',
      rating:70,
    },
  
    {
      name:'Jquery',
      level:'Beginner',
      rating:40,
    },
  
    {
      name:'Tailwind CSS',
      level:'Intermidate',
      rating:60,
    },
  
  
    {
      name:'Figma',
      level:'Intermidate',
      rating:70,
    },
  
    {
      name:'Git',
      level:'Intermidate',
      rating:50,
    },
  
    {
      name:'Docker',
      level:'Intermidate',
      rating:60,
    },
  ]
  
  
  constructor(){}
  
  ngOnInit(): void {
      
  }
  
  
  }
