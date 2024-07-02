import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPessoaisComponent } from './info-pessoais.component';

describe('InfoPessoaisComponent', () => {
  let component: InfoPessoaisComponent;
  let fixture: ComponentFixture<InfoPessoaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPessoaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
