import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule, MatTableModule,
  MatSortModule, MatInputModule, MatPaginatorModule, MatProgressBarModule, MatCheckboxModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule,
  MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule, MatCheckboxModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatExpansionModule,
    MatDatepickerModule, MatNativeDateModule, MatDialogModule
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule, MatCheckboxModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatExpansionModule,
    MatDatepickerModule, MatNativeDateModule, MatDialogModule
  ]
})
export class MaterialModule { }
