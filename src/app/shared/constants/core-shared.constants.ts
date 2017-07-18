import {InjectionToken} from '@angular/core';
import {ICoreShared} from '../models/core-shared.model';

export const CoreDiShared: ICoreShared = {
  dexApiUrl: '../../../assets/mock-data/'
};

export let CoreShared = new InjectionToken< ICoreShared >('app.config');
