import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent implements OnInit {
  services=['Static Guarding',
    'Special Event/Concert',
    'Cash-in-Transit',
    'Technical Services',
    'Total Plant Protection',
    'Mobile Patrol'
    ]
    services2=['Retail Security',
    'Store Detectives',
    'Commissionaires',
    'Key Holding',
    'Surveillance',
    'Consultancy']
    othr1=['VIP Bodyguard',
      'Airport Meet & Assist',
      'Security Officers',
      'Valet Parking',
      'Traffic Control']
    othr2=['Investigations',
      'Safety Officers',
      'Safety and security consulting',
      'Security training programs',
      'Security management guideline']
  constructor() { }

  ngOnInit() {
    // window.scrollTo(0,0);
  }

}
