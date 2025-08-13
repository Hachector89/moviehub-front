import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardBaseComponent } from './movie-card-base-component';

describe('MovieCardBase', () => {
  let component: MovieCardBaseComponent;
  let fixture: ComponentFixture<MovieCardBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
