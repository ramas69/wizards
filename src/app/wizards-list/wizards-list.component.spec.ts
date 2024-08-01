import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardsListComponent } from './wizards-list.component';

describe('WizardsListComponent', () => {
  let component: WizardsListComponent;
  let fixture: ComponentFixture<WizardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
