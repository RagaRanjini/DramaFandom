import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdramasComponent } from './cdramas.component';

describe('CdramasComponent', () => {
  let component: CdramasComponent;
  let fixture: ComponentFixture<CdramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdramasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
