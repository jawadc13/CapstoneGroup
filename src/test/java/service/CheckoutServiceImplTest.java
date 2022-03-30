package service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import com.luv2code.ecommerce.dao.CustomerRepository;
import com.luv2code.ecommerce.dto.Purchase;
import com.luv2code.ecommerce.entity.Address;
import com.luv2code.ecommerce.entity.Customer;
import com.luv2code.ecommerce.entity.Order;
import com.luv2code.ecommerce.entity.OrderItem;
import com.luv2code.ecommerce.service.CheckoutServiceImpl;

@ExtendWith(MockitoExtension.class)
public class CheckoutServiceImplTest {

	@InjectMocks // create class instances that need to be tested within the test class
	CheckoutServiceImpl service;

	@Mock // used to create mocks which are needed to support testing of class
	CustomerRepository repo;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this);

	}

	@Test
	void placeOrder() {

		Purchase purchase = new Purchase();
		String uid = UUID.randomUUID().toString();

		Customer customer = new Customer();
		customer.setEmail("johnDoe@gmail.com");
		customer.setFirstName("John");
		customer.setFirstName("Doe");

		purchase.setCustomer(customer);

		Order order = new Order();

		Set<OrderItem> orderItem = new HashSet<OrderItem>();
		OrderItem orderItems = new OrderItem();
		orderItems.setId((long) 1);
		orderItems.setImageUrl("assets/images/products/laptops/laptop_2.jpg");
		orderItems.setProductId((long) 1);
		orderItems.setQuantity(5);
		BigDecimal amount = new BigDecimal(5);
		orderItems.setUnitPrice(amount);

		orderItem.add(orderItems);
		order.setOrderItems(orderItem);

		order.setOrderTrackingNumber(uid);
		
		Address address = new Address();
		Address billing = new Address();
		
		address.setId((long) 1);
		address.setCountry("united states");
		address.setState("Oregon");
		address.setStreet("3221 valley lane rd");
		address.setZipCode("83393");
		address.setOrder(order);
		
		billing.setId((long) 2);
		billing.setCountry("united states");
		billing.setState("Oregon");
		billing.setStreet("3221 valley lane rd");
		billing.setZipCode("83393");
		billing.setOrder(order);
		
		purchase.setShippingAddress(address);
		purchase.setBillingAddress(billing);
		
		order.setShippingAddress(purchase.getShippingAddress());
		order.setBillingAddress(purchase.getBillingAddress());

		customer.add(order);

		purchase.setOrder(order);

		repo.save(customer);

		verify(repo, times(1)).save(customer);

	}


	@Test
	void generateOrderTrackingNumberTest() {
		// generate a random UUID number

		String uid = UUID.randomUUID().toString();

		assertEquals(36, uid.length());

	}

}
