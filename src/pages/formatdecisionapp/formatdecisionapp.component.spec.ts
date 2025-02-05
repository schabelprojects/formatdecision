import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatdecisionappComponent } from './formatdecisionapp.component';

describe('FormatdecisionappComponent', () => {
  let component: FormatdecisionappComponent;
  let fixture: ComponentFixture<FormatdecisionappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatdecisionappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatdecisionappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
