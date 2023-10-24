import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.css']
})
export class PersonalinformationComponent implements OnInit {
  myData:string[][]=[
  
    ['Name','Ashutosh Mali'],
    ['DOB' ,'15/06/1999'],
    ['Work Exp','24 years'],
    ['Education' ,'B.E(2020)'],
    ['Interests','Cricket'],
  ];
  
  aboutMe:string[]=[
    'Hi, I am a Software Engineer with 1.5 years of experience in software industry.',
    'Worked as Junior Software Developer in PRM Soft Solution pvt. Ltd.',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as CEO of Google Alphabet',
  ];
  
  
    constructor(){}
  
  
    ngOnInit(): void {
        
    }
  
  }
  
