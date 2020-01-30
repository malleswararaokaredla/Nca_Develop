import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotClientInfoComponent } from './hot-client-info.component';

describe('HotClientInfoComponent', () => {
  let component: HotClientInfoComponent;
  let fixture: ComponentFixture<HotClientInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotClientInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotClientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
