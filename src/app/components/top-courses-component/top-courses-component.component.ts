import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-courses-component',
  templateUrl: './top-courses-component.component.html',
  styleUrls: ['./top-courses-component.component.scss'],
})
export class TopCoursesComponentComponent implements OnInit {

  courses=[{img:"../../../assets/icon/a9fd311531bb11c062e43b5fd126441f.png",course_title:"Bachelors of Computer Sciences(Hons)",university_name:"The University of Melbourne"},
           {img:"../../../assets/icon/um logo.png",course_title:"Bachelor of Business Administration",university_name:"The University of Melbourne"},
           {img:"../../../assets/icon/upsi logo.png",course_title:"Bachelors of Fine Arts",university_name:"The University of Melbourne"}]
  constructor() { }

  ngOnInit() {}

}
