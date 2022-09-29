import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecGaleryComponent } from './sec-galery/sec-galery.component';
import { SecActivityComponent } from './sec-activity/sec-activity.component';
import { SecChannelComponent } from './sec-channel/sec-channel.component';

@NgModule({
  declarations: [SecGaleryComponent, SecActivityComponent, SecChannelComponent],
  imports: [CommonModule],
  exports: [SecGaleryComponent, SecActivityComponent, SecChannelComponent],
})
export class ComponentsModule {}
