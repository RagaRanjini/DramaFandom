import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlatestbuzzComponent } from './adminlatestbuzz.component';

describe('AdminlatestbuzzComponent', () => {
  let component: AdminlatestbuzzComponent;
  let fixture: ComponentFixture<AdminlatestbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlatestbuzzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlatestbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
