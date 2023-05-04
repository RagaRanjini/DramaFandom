import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingdramasComponent } from './existingdramas.component';

describe('ExistingdramasComponent', () => {
  let component: ExistingdramasComponent;
  let fixture: ComponentFixture<ExistingdramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingdramasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingdramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
