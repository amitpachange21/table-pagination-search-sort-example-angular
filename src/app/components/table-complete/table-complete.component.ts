import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../shared/country';
import { CountryService } from 'src/app/services/country.service';
import { NgbdSortableHeader, SortEvent } from 'src/app/sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table-complete',
  standalone: true,
  imports: [
    NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbdSortableHeader,
		NgbPaginationModule,
		NgIf,
  ],
  templateUrl: './table-complete.component.html',
  providers: [CountryService, DecimalPipe],
})
export class TableCompleteComponent {

  countries$: Observable<Country[]>;
	total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
		this.countries$ = service.countries$;
		this.total$ = service.total$;
	}

  onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}

}
