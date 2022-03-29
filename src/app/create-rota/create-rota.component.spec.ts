import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRotaComponent } from './create-rota.component';

describe('CreateRotaComponent', () => {
  let component: CreateRotaComponent;
  let fixture: ComponentFixture<CreateRotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
