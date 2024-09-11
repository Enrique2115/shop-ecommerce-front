import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Accion } from '../../../interfaces/tabla-columna';
import { SearchComponent } from '../searchTable/search.component';

@Component({
  selector: 'app-table-data',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './table-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDataComponent implements OnInit {
  ngOnInit(): void {
    console.log('Tabla de datos');
  }

  title = '';
  columnas: string[] = [];
  dataSource: any = [];

  @Input() set titulo(title: any) {
    this.title = title;
  }

  @Input() set columns(columns: string[]) {
    this.columnas = columns;
  }

  @Input() set data(data: any) {
    this.dataSource = data;
  }

  @Output() action: EventEmitter<Accion> = new EventEmitter();

  onAction(accion: string, row?: any) {
    this.action.emit({ accion: accion, fila: row });
  }
}
