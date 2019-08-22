import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material';
import { Product } from '../product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'Description', 'Cost', 'Unit', 'Created', 'Modified', 'Edit', 'Delete'];
  dataSource;

  products: any = [];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.dataService.get_products().subscribe(
      (res: Product[]) => {
        this.products = res;
        this.dataSource = new MatTableDataSource(res);
      },
      err => console.log(err),
    );
  }

  deleteProduct(id: string) {
    this.dataService.delete_product(id).subscribe(
      res => {
        console.log(res),
        this.getProducts();
      },
      err => console.log(err)
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
