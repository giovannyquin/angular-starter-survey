import {InjectionToken} from '@angular/core';
import {ICoreSharedConstants} from '../models/core-shared.model';

export const CoreDiSharedConstants: ICoreSharedConstants = {
  dexApiUrl: '../../../assets/mock-data/'
};

export let coreSharedConstants = new InjectionToken< ICoreSharedConstants >('app.config');
