import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Wizard } from '../../shared/entities';
import { WizardService } from '../../shared/wizard.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wizards-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizards-list.component.html',
  styleUrl: './wizards-list.component.css'
})
export class WizardsListComponent implements OnInit, OnDestroy {
  wizards:Wizard[]= [];
  message= " ";
  service=inject(WizardService);
  dataWizard!:Subscription;

  ngOnInit(): void {
      this.getAll();
  }

  getAll(){
   this.dataWizard = this.service.fetchAll().subscribe({
    next:(data:Wizard[])=> {
      this.wizards = data;
      this.message = " Bravo"
    },
    error: (err) => {
      this.message = "Echec"
      console.error('Erreur lors de la récupération des sorciers:', err);
    }
      
    })
  }

  ngOnDestroy(): void {
      this.dataWizard.unsubscribe();
  }

}
