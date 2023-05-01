import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBuzzComponent } from './latest-buzz.component';

describe('LatestBuzzComponent', () => {
  let component: LatestBuzzComponent;
  let fixture: ComponentFixture<LatestBuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestBuzzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
