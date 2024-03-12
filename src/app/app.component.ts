import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ag-grid-v30';
  // Row Data: The data to be displayed.
  rowData = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {
      field: 'make',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: [
          'English',
          'Spanish',
          'French',
          'Portuguese',
          '(other)',
          'English',
          'Spanish',
          'French',
          'English',
          'Spanish',
          'French',
          'Portuguese',
          '(other)',
          'English',
          'Spanish',
          'French',
          'English',
          'Spanish',
          'French',
          'Portuguese',
          '(other)',
          'English',
          'Spanish',
          'French',
          'English',
          'Spanish',
          'French',
          'Portuguese',
          '(other)',
          'English',
          'Spanish',
          'French',
          'English',
          'Spanish',
          'French',
          'Portuguese',
          '(other)',
          'English',
          'Spanish',
          'French',
          'Portuguese',
          '(other)',
          'English',
          'Spanish',
          'French',
          'Portuguese',
          '(other)',
          'English',
          'Spanish',
          'French',
          'Portuguese',
          '(other)',
        ],
      },
    },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];
}
