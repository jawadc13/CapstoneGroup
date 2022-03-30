import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {





<<<<<<< HEAD
  private baseUrl = environment.ecommerceUrl + '/products';


  private categoryUrl = environment.ecommerceUrl + '/product-category';
=======
  private baseUrl = 'https://localhost:8181/api/products';


  private categoryUrl = 'https://localhost:8181/api/product-category';
>>>>>>> 09b18d5ff11788c5a92d7c0bfe632c17cf08dcd7
  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: number): Observable<Product> {
    //build url based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(productUrl);
  }

  getProductListPaginate(thePage: number, 
                         thePageSize: number, 
                         theCategoryId: number): Observable<GetResponseProducts> {

    //need to build URL based on category id , page, and page size
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);  }

  getProductList(theCategoryId: number): Observable<Product[]> {

    //need to build URL based on category id 
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProducts(searchUrl);  }


  searchProducts(theKeyword: string): Observable<Product[]> {
    //need to build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }

  searchProductsPaginate(thePage: number, 
                            thePageSize: number, 
                            theKeyword: string): Observable<GetResponseProducts> {

    //need to build URL based on category id , page, and page size
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);  
}

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(map(response=> response._embedded.productCategory));
  }


}


interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },

  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}