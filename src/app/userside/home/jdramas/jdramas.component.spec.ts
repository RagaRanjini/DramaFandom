import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdramasComponent } from './jdramas.component';

describe('JdramasComponent', () => {
  let component: JdramasComponent;
  let fixture: ComponentFixture<JdramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdramasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JdramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
