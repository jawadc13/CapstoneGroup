import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { AdminService } from 'src/app/services/admin.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  createProductFormGroup: FormGroup;
  updateProductFormGroup: FormGroup;
  deleteProductFormGroup: FormGroup;

  products: Product[] = [];

  storage: Storage = sessionStorage;

  constructor(private formBuilder: FormBuilder,private productService: ProductService,
    private adminService: AdminService,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  onSubmitCreate() {
    console.log("Handling the submit button");

    if (this.createProductFormGroup.invalid) {
      this.createProductFormGroup.markAllAsTouched();
      return;
    }
  }

  onSubmitUpdate() {
    console.log("Handling the submit button");

    if (this.updateProductFormGroup.invalid) {
      this.updateProductFormGroup.markAllAsTouched();
      return;
    }
  }

  onSubmitDelete() {
    console.log("Handling the submit button");

    if (this.deleteProductFormGroup.invalid) {
      this.deleteProductFormGroup.markAllAsTouched();
      return;
    }
  }


}
