import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NCAComponent } from './nca.component';

describe('NCAComponent', () => {
  let component: NCAComponent;
  let fixture: ComponentFixture<NCAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NCAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
