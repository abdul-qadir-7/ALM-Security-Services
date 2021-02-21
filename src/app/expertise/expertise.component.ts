import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent implements OnInit {
  services=['Manned Security',
  'Facility Management',
  'Cash In-Transit',
  'Technical Services'
    ]
    services2=['Plant Protection',
    'Event Security',
    'Vip Security',
  'Surveillance'
    ]
    services3=['Key Holding',
    'Store Detectives',
    'Consultancy']
    othr1=[
      'Airport Meet & Assist',
      'Key Holding',
    'Store Detectives',
    'Consultancy',
      'Traffic Control']
    othr2=['Investigations',
      'Safety Officers',
      'Safety and security consulting',
      'Security training programs',
      'Security management guideline']
  constructor() { }

  ngOnInit() {
    //  window.scrollTo(0,0);
  }

}
