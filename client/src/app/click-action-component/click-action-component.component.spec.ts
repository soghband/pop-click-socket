import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickActionComponentComponent } from './click-action-component.component';

describe('ClickActionComponentComponent', () => {
  let component: ClickActionComponentComponent;
  let fixture: ComponentFixture<ClickActionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickActionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickActionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
