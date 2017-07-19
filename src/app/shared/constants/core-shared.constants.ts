import {InjectionToken} from '@angular/core';
import {ICoreSharedConstants} from '../models/core-shared.model';

export const CoreDiSharedConstants: ICoreSharedConstants = {
  dexApiUrl: '../../../assets/mock-data/'
};

export let CoreSharedConstants = new InjectionToken< ICoreSharedConstants >('app.config');
