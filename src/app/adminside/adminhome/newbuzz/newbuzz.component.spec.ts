import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbuzzComponent } from './newbuzz.component';

describe('NewbuzzComponent', () => {
  let component: NewbuzzComponent;
  let fixture: ComponentFixture<NewbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbuzzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
