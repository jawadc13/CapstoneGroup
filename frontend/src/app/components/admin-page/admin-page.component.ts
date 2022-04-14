import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  productFormGroup: FormGroup;
  products: Product[] = [];

  storage: Storage = sessionStorage;

  constructor(private formBuilder: FormBuilder,private productService: ProductService,
    private adminService: AdminService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.productFormGroup= this.formBuilder.group({
      customer: this.formBuilder.group({
        id: new FormControl('', [
          Validators.required,
        ]),
        category: new FormControl('', [
          Validators.required,
        ]),
        sku: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        unitPrice: new FormControl('', [
          Validators.required,
        ]),
        imageUrl: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        active: new FormControl('', [
          Validators.required,
        ]),
        unitInStock: new FormControl('', [
          Validators.required,
        ]),
      
      }),
    });
  }


  onSubmit() {
    console.log("Handling the submit button");

    if (this.productFormGroup.invalid) {
      this.productFormGroup.markAllAsTouched();
      return;
    }
  }

}
