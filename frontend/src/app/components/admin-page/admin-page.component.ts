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
  product: Product;

  storage: Storage = sessionStorage;

  displayError: any = "";

  isDisabled: boolean = false;

  constructor(private formBuilder: FormBuilder,private productService: ProductService,
    private adminService: AdminService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.productFormGroup= this.formBuilder.group({
      product: this.formBuilder.group({
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


  onSubmitCreate() {
    console.log("Handling the submit button");

    if (this.productFormGroup.invalid) {
      this.productFormGroup.markAllAsTouched();
      return;
    }


    // set product object with form values
    let product = new Product();
    product = this.productFormGroup.controls['product'].value;

    if(!this.productFormGroup.invalid && this.displayError.textContext === "") {
      
      this.isDisabled = true;

   
                //call REST API via the AdminService
                this.adminService.createProduct(product).subscribe({
                  next: response => {
                    alert(`Product was created`);

                    this.isDisabled = false;
                  },
                  error: err => {
                    alert(`There was an error: ${err.message}`);
                    this.isDisabled = false;
                  }
                })}else{
      this.productFormGroup.markAllAsTouched();
      return;
    }

  }



  onSubmitUpdate() {
    console.log("Handling the submit button");

    if (this.productFormGroup.invalid) {
      this.productFormGroup.markAllAsTouched();
      return;
    }


    // set product object with form values
    let product = new Product();
    product = this.productFormGroup.controls['product'].value;

    if(!this.productFormGroup.invalid && this.displayError.textContext === "") {
      
      this.isDisabled = true;

   
                //call REST API via the AdminService
                this.adminService.updateProduct(product).subscribe({
                  next: response => {
                    alert(`Product was updated`);

                    this.isDisabled = false;
                  },
                  error: err => {
                    alert(`There was an error: ${err.message}`);
                    this.isDisabled = false;
                  }
                })}else{
      this.productFormGroup.markAllAsTouched();
      return;
    }

  }



  onSubmitDelete() {
    console.log("Handling the submit button");

    if (this.productFormGroup.invalid) {
      this.productFormGroup.markAllAsTouched();
      return;
    }


    // set product object with form values
    let product = new Product();
    product = this.productFormGroup.controls['product'].value;

    if(!this.productFormGroup.invalid && this.displayError.textContext === "") {
      
      this.isDisabled = true;

   
                //call REST API via the AdminService
                this.adminService.deleteProduct(product).subscribe({
                  next: response => {
                    alert(`Product was deleted`);

                    this.isDisabled = false;
                  },
                  error: err => {
                    alert(`There was an error: ${err.message}`);
                    this.isDisabled = false;
                  }
                })}else{
      this.productFormGroup.markAllAsTouched();
      return;
    }

  }

}
