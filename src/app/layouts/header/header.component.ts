import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  listCategory = [
    'Videos',
    'People',
    'Documents',
    'Event',
    'Communities',
    'Favorites',
    'Channels',
  ];

  activeMobile: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  scroll(id: any) {
    if (this.activeMobile) {
      this.openHeader();
    }
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  openHeader() {
    let body = document.getElementById('body');
    console.log(body);

    this.activeMobile = !this.activeMobile;
    this.activeMobile
      ? this.renderer.addClass(body, 'overflow-hidden')
      : this.renderer.removeClass(body, 'overflow-hidden');
  }
}
