import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComitePage } from './comite.page';

describe('ComitePage', () => {
  let component: ComitePage;
  let fixture: ComponentFixture<ComitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
