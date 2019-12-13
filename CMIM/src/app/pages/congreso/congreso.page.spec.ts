import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CongresoPage } from './congreso.page';

describe('CongresoPage', () => {
  let component: CongresoPage;
  let fixture: ComponentFixture<CongresoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongresoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CongresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
