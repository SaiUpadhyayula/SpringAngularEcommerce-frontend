import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsHeaderComponent } from './bs-header.component';

describe('BsHeaderComponent', () => {
  let component: BsHeaderComponent;
  let fixture: ComponentFixture<BsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
