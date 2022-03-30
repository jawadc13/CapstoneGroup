import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentInfo } from '../common/payment-info';
import { Purchase } from '../common/purchase';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

<<<<<<< HEAD
  private purchaseUrl = environment.ecommerceUrl + '/checkout/purchase';

  private paymentIntentUrl = environment.ecommerceUrl + '/checkout/payment-intent';
=======
  private purchaseUrl = 'https://localhost:8181/api/checkout/purchase';

  private paymentIntentUrl = environment.luv2shopApiUrl + '/checkout/payment-intent';
>>>>>>> 09b18d5ff11788c5a92d7c0bfe632c17cf08dcd7

  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any> {
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);
  }

  createPaymentIntent(paymentInfo: PaymentInfo): Observable<any> {
    return this.httpClient.post<PaymentInfo>(this.paymentIntentUrl, paymentInfo);
  }
}
