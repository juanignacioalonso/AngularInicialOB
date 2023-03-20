import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandonContactPageComponent } from './randon-contact-page.component';

describe('RandonContactPageComponent', () => {
  let component: RandonContactPageComponent;
  let fixture: ComponentFixture<RandonContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandonContactPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandonContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
