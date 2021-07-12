import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-and-search-bar-component',
  templateUrl: './tags-and-search-bar-component.component.html',
  styleUrls: ['./tags-and-search-bar-component.component.scss'],
})
export class TagsAndSearchBarComponentComponent implements OnInit {

  tags=[{tag_name:"People"},
        {tag_name:"Courses"},
        {tag_name:"Institution"},
        {tag_name:"Scholarship"},
        {tag_name:"Companies"},
        {tag_name:"More+"}
      ];

  constructor() { }

  ngOnInit() {}

}
