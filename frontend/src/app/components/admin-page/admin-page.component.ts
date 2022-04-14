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

  constructor(private formBuilder: FormBuilder,private productService: ProductService,
    private adminService: AdminService,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


}
