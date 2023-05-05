import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbuzzComponent } from './editbuzz.component';

describe('EditbuzzComponent', () => {
  let component: EditbuzzComponent;
  let fixture: ComponentFixture<EditbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbuzzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
