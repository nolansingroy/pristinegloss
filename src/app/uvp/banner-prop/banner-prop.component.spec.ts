import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPropComponent } from './banner-prop.component';

describe('BannerPropComponent', () => {
  let component: BannerPropComponent;
  let fixture: ComponentFixture<BannerPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
