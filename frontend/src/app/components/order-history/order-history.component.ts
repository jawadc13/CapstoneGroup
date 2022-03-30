import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';
=======
import { OrderHistory } from '../../common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history-service.service';
>>>>>>> 09b18d5ff11788c5a92d7c0bfe632c17cf08dcd7

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;
<<<<<<< HEAD
  
=======

>>>>>>> 09b18d5ff11788c5a92d7c0bfe632c17cf08dcd7
  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit(): void {
    this.handleOrderHistory();
  }
<<<<<<< HEAD
  handleOrderHistory() {
    //read the user's email address from browser storage
    const theEmail = JSON.parse(this.storage.getItem('userEmail'));

    //retrieve data from the service
=======

  handleOrderHistory() {

    // read the user's email address from browser storage
    const theEmail = JSON.parse(this.storage.getItem('userEmail'));

    // retrieve data from the service
>>>>>>> 09b18d5ff11788c5a92d7c0bfe632c17cf08dcd7
    this.orderHistoryService.getOrderHistory(theEmail).subscribe(
      data => {
        this.orderHistoryList = data._embedded.orders;
      }
<<<<<<< HEAD
    )
=======
    );
>>>>>>> 09b18d5ff11788c5a92d7c0bfe632c17cf08dcd7
  }

}
