import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec-galery',
  templateUrl: './sec-galery.component.html',
  styleUrls: ['./sec-galery.component.scss'],
})
export class SecGaleryComponent implements OnInit {
  @Input() dataComp: any;
  @Input() type!: string;

  constructor() {}

  ngOnInit(): void {}
}
