import { Component ,OnInit} from '@angular/core';
import { Education } from 'src/app/Models/Model';

@Component({
  selector: 'app-educatiuon',
  templateUrl: './educatiuon.component.html',
  styleUrls: ['./educatiuon.component.css']
})
export class EducatiuonComponent  implements OnInit {

  educationList: Education[]=[
  
    {
      institute:'Gandhi Bal Mandir High School',
      course:'SSC',
      duration:'2013-2014',
      score:'73%',
    },
  
    {
      institute:'Karthika High School and Junior College',
      course:'HSC',
      duration:'2014-2016',
      score:'67%',
    },
    {
      institute:'Vidyalankar Institute Of Technology',
      course:'B.E.',
      duration:'2016-2020',
      score:'73%',
    },
  
  ]
  
  
    constructor(){}
  
  ngOnInit(): void {
      
  }
  
  }
  