import { Injectable } from '@angular/core';

import { environment } from '@src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentVariablesService {
  constructor() {}

  get storeFrontToken(): string {
    return environment.storeFrontToken;
  }

  get butterCMSToken(): string {
    return environment.butterCMSToken;
  }

  get storeUrl(): string {
    return environment.storeUrl;
  }
}
