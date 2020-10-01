import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpConfigComponent } from './jsonp-config.component';

describe('JsonpConfigComponent', () => {
  let component: JsonpConfigComponent;
  let fixture: ComponentFixture<JsonpConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonpConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
