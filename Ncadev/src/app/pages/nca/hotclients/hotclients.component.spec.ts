import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotclientsComponent } from './hotclients.component';

describe('HotclientsComponent', () => {
  let component: HotclientsComponent;
  let fixture: ComponentFixture<HotclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
