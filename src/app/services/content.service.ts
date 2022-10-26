import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  constructor() {}

  static getTitleName(): string {
    return "SC Junkies 1999";
  }
}
