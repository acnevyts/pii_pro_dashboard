import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehydrationProfileComponent } from './rehydration-profile.component';

describe('RehydrationProfileComponent', () => {
  let component: RehydrationProfileComponent;
  let fixture: ComponentFixture<RehydrationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehydrationProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RehydrationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
