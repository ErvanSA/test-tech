import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  listFooter: any = [
    'About',
    'For Business',
    'Suggestions',
    'Help & FAQs',
    'Contact',
    'Price',
  ];
  constructor() {}

  ngOnInit(): void {}
}
