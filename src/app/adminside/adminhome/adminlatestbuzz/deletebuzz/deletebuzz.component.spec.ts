import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebuzzComponent } from './deletebuzz.component';

describe('DeletebuzzComponent', () => {
  let component: DeletebuzzComponent;
  let fixture: ComponentFixture<DeletebuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletebuzzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletebuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
