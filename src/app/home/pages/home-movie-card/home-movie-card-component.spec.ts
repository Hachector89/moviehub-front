import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMovieCardComponent } from './home-movie-card-component';

describe('HomeMovieCard', () => {
  let component: HomeMovieCardComponent;
  let fixture: ComponentFixture<HomeMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMovieCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
