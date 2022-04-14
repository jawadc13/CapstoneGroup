import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private createProductUrl = environment.ecommerceUrl + '';

  private updateProductUrl = environment.ecommerceUrl + '';

  private deleteProductUrl = environment.ecommerceUrl + '';

  constructor(private httpClient: HttpClient) { }


  createProduct(product: Product): Observable<Product>{

    return null;
    
  }

  addProduct(product: Product): Observable<Product>{

    return null;
    
  }

  deleteProduct(product: Product): Observable<Product>{

    return null;
    
  }


}
