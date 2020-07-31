import { Component, OnInit } from '@angular/core';
import { PromotionalPage } from '@src/app/types';
import { ButterCMSService } from '@src/app/core/butter-cms/butter-cms.service';
import { Observable, EMPTY } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, catchError } from 'rxjs/operators';

@Component({
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.scss'],
})
export class PagesListComponent implements OnInit {
  pages: Observable<{
    data: PromotionalPage[];
    meta: {
      count: number;
    };
  }>;
  pageSize = 10;
  currentPage: number;
  locale: string;
  math = Math;

  constructor(
    private butterCMSService: ButterCMSService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pages = this.route.queryParamMap.pipe(
      switchMap((params) => {
        this.locale = params.get('locale') || 'en';
        this.currentPage = parseInt(params.get('page'), 10) || 1;
        return this.butterCMSService.getPromotionalPages(
          this.pageSize,
          this.currentPage,
          'en'
        );
      }),
      catchError(() => {
        this.router.navigate(['/error-pages/page-not-found']);
        return EMPTY;
      })
    );
  }
}
