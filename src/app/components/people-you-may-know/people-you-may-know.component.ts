import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-you-may-know',
  templateUrl: './people-you-may-know.component.html',
  styleUrls: ['./people-you-may-know.component.scss'],
})
export class PeopleYouMayKnowComponent implements OnInit {

  info=[{pic:"../../../assets/icon/melbourne logo.png",name:"Rick Novac", school:"French School of Kuala Lampur",mutual_friends:"8 mutual friends"},
  {pic:"../../../assets/icon/honda Takumi.png",name:"Honda Takumi", school:"French School of Kuala Lampur",mutual_friends:""}]
  constructor() { }

  ngOnInit() {}

}
