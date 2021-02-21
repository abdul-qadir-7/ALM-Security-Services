import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  trainings1=['What is Security?',
    'Public Relations',
    'Legal Power and Limitations',
    'General Duties',
    'Patrolling on Foot',
    'Patrolling in a Vehicle',
    'Note Taking and Reporting']
    trainings2=[
      'Communications',
'Fire Prevention and Control',
'Inspections and Safety',
'Emergencies, Natural & Man-Made',
'First Aid',
'Special Problems of Security',
'Enforcement'
    ]
    trainings3=[
      'Observation and Description',
'Bomb Threat',
'Evacuation',
'Physical Training',
'Risk Analysis and the Security Survey (for Supervisor)',
'Evaluation Systems',
'Firearms'

    ]
    security1=['Static Guarding',
      'Total Plant Protection',
      'Facility Management',
      'Retail Security',
      'Store Detectives',
      'Commissionaires']
    security2=[
      'Technical Services',
'Surveillance',
'Cash-in-Transit',
'Special Event/Concert',
'Consultancy',
'Key Holding'
    ]
    security3=[
      'VIP Bodyguard',
'Airport Meet & Assist',
'Security Officers',
'Valet Parking',
'Traffic Control'
    ]
    security4=[
      'Investigations',
'Safety Officers',
'Safety and security consulting',
'Security training programs',
'Security management guideline'
    ]
    infra1=[
      'Electronic patrolling System ',
'Security X-ray machine',
'Door Frame Metal Detector',
'Hand Scanner',
'Under Vehicle camera scanner',
'CCTV',
'Online security camera system',
'Fire Alarms',
'Radio and Communication'
    ]
    infra2=[
      'Light Stick',
'Flash Light',
'Caution Signs',
'Caution Tapes',
'Reflective vest'
    ]
  ngOnInit() {
    //window.scrollTo(0,0);
  }
  goToAbout() { 
    this.router.navigate(['/about']); 
 } doIt(){
   this.router.navigate(['expertise/surveillance']);
 }
 goToHelp(){
  this.router.navigate(['/expertise'], { fragment: 'help' });
 }
 goToGuards(){
  this.router.navigate(['/expertise'], { fragment: 'guards' });
}
goToSurveillance(){
  this.router.navigate(['/expertise'], { fragment: 'surveillance' });
}
}
