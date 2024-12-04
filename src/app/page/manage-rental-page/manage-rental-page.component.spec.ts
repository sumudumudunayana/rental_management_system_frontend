import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRentalPageComponent } from './manage-rental-page.component';

describe('ManageRentalPageComponent', () => {
  let component: ManageRentalPageComponent;
  let fixture: ComponentFixture<ManageRentalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageRentalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRentalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
