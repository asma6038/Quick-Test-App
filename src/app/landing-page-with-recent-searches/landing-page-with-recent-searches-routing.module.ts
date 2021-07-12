import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageWithRecentSearchesPage } from './landing-page-with-recent-searches.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPageWithRecentSearchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageWithRecentSearchesPageRoutingModule {}
