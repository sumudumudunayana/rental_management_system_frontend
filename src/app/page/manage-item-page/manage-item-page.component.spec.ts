import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageItemPageComponent } from './manage-item-page.component';

describe('ManageItemPageComponent', () => {
  let component: ManageItemPageComponent;
  let fixture: ComponentFixture<ManageItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageItemPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
