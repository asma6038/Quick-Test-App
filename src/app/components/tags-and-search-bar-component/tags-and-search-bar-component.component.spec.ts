import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TagsAndSearchBarComponentComponent } from './tags-and-search-bar-component.component';

describe('TagsAndSearchBarComponentComponent', () => {
  let component: TagsAndSearchBarComponentComponent;
  let fixture: ComponentFixture<TagsAndSearchBarComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsAndSearchBarComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TagsAndSearchBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
