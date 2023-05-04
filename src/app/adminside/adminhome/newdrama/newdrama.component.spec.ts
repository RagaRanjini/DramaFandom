import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdramaComponent } from './newdrama.component';

describe('NewdramaComponent', () => {
  let component: NewdramaComponent;
  let fixture: ComponentFixture<NewdramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
