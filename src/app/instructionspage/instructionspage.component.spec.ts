import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionspageComponent } from './instructionspage.component';

describe('InstructionspageComponent', () => {
  let component: InstructionspageComponent;
  let fixture: ComponentFixture<InstructionspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructionspageComponent]
    });
    fixture = TestBed.createComponent(InstructionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
