import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-articles-component',
  templateUrl: './latest-articles-component.component.html',
  styleUrls: ['./latest-articles-component.component.scss'],
})
export class LatestArticlesComponentComponent implements OnInit {

  article_info=[{image:"../../../assets/icon/backimg.png",title:"Why the Freelance Life May get easier",written_by:"Monash University",icon:"../../../assets/icon/icons8-new-job.png",date:"14/10/2020"},
                {image:"../../../assets/icon/download.png",title:"How much do International students brings to ",written_by:"Monash University",icon:"../../../assets/icon/icons8-new-job.png",date:"14/10/2020"},
                {image:"../../../assets/icon/med.png",title:"NYU Offers Free Jobs For All Medical Student ",written_by:"Monash University",icon:"../../../assets/icon/icons8-new-job.png",date:"14/10/2020"}];
  constructor() { }

  ngOnInit() {}

}
