import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendlistWidgetComponent } from './friendlist-widget.component';

describe('FriendlistWidgetComponent', () => {
  let component: FriendlistWidgetComponent;
  let fixture: ComponentFixture<FriendlistWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendlistWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendlistWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
