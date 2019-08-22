import { Component, OnInit, HostBinding } from '@angular/core';
import { DataService} from '../data.service';
import { Product } from '../product';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  product: any = {
    title: '',
    description: '',
    unitCost: 0,
    unit: ''
  };

  edit = false;
  submit = false;

  constructor(private dataService: DataService, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.dataService.getProduct(params.id).subscribe(
        res => {
          this.product = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  cleanFields() {
    this.product.title = '';
    this.product.description = '';
    this.product.unitCost = 0;
    this.product.unit = '';
  }

  postProduct() {
    this.dataService.post_product(this.product).subscribe(
      res => {
        console.log(res);
        this.cleanFields();
        this.submit = true;
      },
      err => console.error(err)
    );
  }

  updateProduct() {
    this.dataService.updateProduct(this.product.id, this.product).subscribe(
      res => {
        console.log(res);
        this.cleanFields();
      },
      err => console.log(err)
    );
  }

}
