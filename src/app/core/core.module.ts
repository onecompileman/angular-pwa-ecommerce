import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SharedModule } from '../shared/shared.module';
import * as fromServices from './services';
import { environment } from '../../environments/environment';
import { RestangularModule } from 'ngx-restangular';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent, ...fromServices.services],
  imports: [
    CommonModule,
    SharedModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl(environment.api);
}
