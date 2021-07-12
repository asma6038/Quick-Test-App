import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageWithRecentSearchesPageRoutingModule } from './landing-page-with-recent-searches-routing.module';

import { LandingPageWithRecentSearchesPage } from './landing-page-with-recent-searches.page';

// --------------------------Importing All Components-------------------------------
import {RecentSearchesComponentComponent} from '../components/recent-searches-component/recent-searches-component.component'
import {TagsAndSearchBarComponentComponent} from '../components/tags-and-search-bar-component/tags-and-search-bar-component.component'
import {PeopleYouMayKnowComponent} from '../components/people-you-may-know/people-you-may-know.component'
import {TopCoursesComponentComponent} from '../components/top-courses-component/top-courses-component.component'
import {LatestArticlesComponentComponent} from '../components/latest-articles-component/latest-articles-component.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageWithRecentSearchesPageRoutingModule
  ],
  declarations: [LandingPageWithRecentSearchesPage,TagsAndSearchBarComponentComponent,RecentSearchesComponentComponent,PeopleYouMayKnowComponent,TopCoursesComponentComponent,LatestArticlesComponentComponent]
})
export class LandingPageWithRecentSearchesPageModule {}
