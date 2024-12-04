import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentalPageComponent } from './add-rental-page.component';

describe('AddRentalPageComponent', () => {
  let component: AddRentalPageComponent;
  let fixture: ComponentFixture<AddRentalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRentalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRentalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
