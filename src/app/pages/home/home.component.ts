import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listPeople: any;
  listDoc: any;
  listVideo: any;
  listActivity: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPeople();
    this.getDoc();
    this.getVideos();
    this.getActivity();
  }

  getPeople() {
    this.apiService.getDataApi('people').subscribe((res: any) => {
      this.listPeople = res;
    });
  }

  getDoc() {
    this.apiService.getDataApi('documents').subscribe((res: any) => {
      this.listDoc = res;
    });
  }

  getVideos() {
    this.apiService.getDataApi('videos').subscribe((res: any) => {
      this.listVideo = res;
    });
  }

  getActivity() {
    this.apiService.getDataApi('activity').subscribe((res: any) => {
      this.listActivity = res;
    });
  }
}
