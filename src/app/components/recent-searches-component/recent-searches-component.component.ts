import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-searches-component',
  templateUrl: './recent-searches-component.component.html',
  styleUrls: ['./recent-searches-component.component.scss'],
})
export class RecentSearchesComponentComponent implements OnInit {

  items=[{image:"../../../assets/icon/icons8-search-30.png",title:"I want to study Marketing in England"},
         {image:"../../../assets/icon/icons8-search-30.png",title:"Institution that offer Medical in Malaysia"},
         {image:"../../../assets/icon/Danny william.png",title:"Danny William"},
         {image:"../../../assets/icon/Danny william.png",title:"Danny William"}];
  constructor() { }

  ngOnInit() {}

  Clear_Searches()
  {
    console.log("Clear Searches");
  }

}
