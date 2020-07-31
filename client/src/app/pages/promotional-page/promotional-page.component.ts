import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { PromotionalPage } from '@src/app/types';

@Component({
  templateUrl: './promotional-page.component.html',
  styleUrls: ['./promotional-page.component.scss'],
})
export class PromotionalPageComponent implements OnInit {
  page: Observable<PromotionalPage>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.page = this.route.data.pipe(
      map((data: { page: PromotionalPage }) => {
        return data.page;
      })
    );
  }
}
