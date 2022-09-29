import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec-activity',
  templateUrl: './sec-activity.component.html',
  styleUrls: ['./sec-activity.component.scss'],
})
export class SecActivityComponent implements OnInit {
  listData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getDataApi('activity').subscribe((res: any) => {
      this.listData = res;
    });
  }
}
