import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandingPageWithRecentSearchesPage } from './landing-page-with-recent-searches.page';

describe('LandingPageWithRecentSearchesPage', () => {
  let component: LandingPageWithRecentSearchesPage;
  let fixture: ComponentFixture<LandingPageWithRecentSearchesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageWithRecentSearchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageWithRecentSearchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
