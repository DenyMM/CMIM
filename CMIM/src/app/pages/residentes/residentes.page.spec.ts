import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResidentesPage } from './residentes.page';

describe('ResidentesPage', () => {
  let component: ResidentesPage;
  let fixture: ComponentFixture<ResidentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResidentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
