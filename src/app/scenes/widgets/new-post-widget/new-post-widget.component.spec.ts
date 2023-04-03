import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostWidgetComponent } from './new-post-widget.component';

describe('NewPostWidgetComponent', () => {
  let component: NewPostWidgetComponent;
  let fixture: ComponentFixture<NewPostWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
