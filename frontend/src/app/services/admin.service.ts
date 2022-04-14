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


  private createProductUrl = environment.ecommerceUrl + '/product/service/create';

  private updateProductUrl = environment.ecommerceUrl + '/product/service/update';

  private deleteProductUrl = environment.ecommerceUrl + '/product/service/delete';

  constructor(private httpClient: HttpClient) { }


  createProduct(product: Product): Observable<Product>{
  
    return this.httpClient.post<Product>(this.createProductUrl,product);
    
  }

  updateProduct(product: Product): Observable<Product>{

    return this.httpClient.post<Product>(this.updateProductUrl,product);
    
  }

  deleteProduct(product: Product): Observable<Product>{

    return this.httpClient.post<Product>(this.deleteProductUrl,product);
    
  }


}
