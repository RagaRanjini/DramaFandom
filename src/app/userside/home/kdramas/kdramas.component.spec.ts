import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdramasComponent } from './kdramas.component';

describe('KdramasComponent', () => {
  let component: KdramasComponent;
  let fixture: ComponentFixture<KdramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdramasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KdramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
