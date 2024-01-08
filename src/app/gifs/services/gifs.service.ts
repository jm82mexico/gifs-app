import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    tag = tag.trim().toLowerCase();

    this._tagsHistory.unshift(tag);
    // if (!this._tagsHistory.includes(tag)) {
    //   this._tagsHistory.unshift(tag);
    //   this._tagsHistory = this._tagsHistory.slice(0, 10);
    // }
    console.log(this._tagsHistory);
  }

}
