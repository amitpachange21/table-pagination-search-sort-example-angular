import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableCompleteComponent } from './components/table-complete/table-complete.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TableFilteringComponent } from './components/table-filtering/table-filtering.component';
import { AsyncPipe, DecimalPipe, NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'table-complete', component: TableCompleteComponent},
    {path: 'table-search', component: TableFilteringComponent},
    {path: '', redirectTo: '/table-search', pathMatch: 'full'},
]

@NgModule({
    declarations: [
        AppComponent,
        TableFilteringComponent
    ],
    providers: [DecimalPipe],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        NgbModule,
        TableCompleteComponent,
        DecimalPipe,
        NgFor, 
        AsyncPipe, 
        ReactiveFormsModule, 
        NgbTypeaheadModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppModule { }
