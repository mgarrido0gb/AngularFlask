import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreApiComponent } from './sobre-api.component';

describe('SobreApiComponent', () => {
  let component: SobreApiComponent;
  let fixture: ComponentFixture<SobreApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
