import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec-channel',
  templateUrl: './sec-channel.component.html',
  styleUrls: ['./sec-channel.component.scss'],
})
export class SecChannelComponent implements OnInit {
  listChannel = [
    'Google',
    'Dribble',
    'Microsoft',
    'Behance',
    'Weather Channel',
    'Gurus',
    'iMedia',
    'Creativeye',
    'Khan Studios',
    'Yahoo',
  ];

  constructor() {}

  ngOnInit(): void {}
}
