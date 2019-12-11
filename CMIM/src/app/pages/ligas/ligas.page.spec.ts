import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LigasPage } from './ligas.page';

describe('LigasPage', () => {
  let component: LigasPage;
  let fixture: ComponentFixture<LigasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LigasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
