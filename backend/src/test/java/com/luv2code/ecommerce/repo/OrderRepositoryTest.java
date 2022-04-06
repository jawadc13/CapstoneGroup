package repo;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import com.luv2code.ecommerce.dao.OrderRepository;
import com.luv2code.ecommerce.entity.Customer;
import com.luv2code.ecommerce.entity.Order;

@ExtendWith(MockitoExtension.class)
public class OrderRepositoryTest {


	
	@Mock
	OrderRepository repo;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this);

	}
//
//	@Test
//	public void getAllOrderTest() {
//
//		ArrayList<Order> order = new ArrayList<Order>();
//
//		Order e = Mockito.mock(Order.class);
//
//		e.setId((long) 1);
//		e.setEmail("johnDoe@gmail.com");
//		e.setFirstName("john");
//		e.setLastName("doe");
//
//		order.add(e);
//
//		repo.saveAll(order);
//
//		verify(repo, times(1)).saveAll(order);
//
//		when(repo.findAll()).thenReturn(order);
//
//		Assertions.assertFalse(repo.findAll().isEmpty());
//
//	}


}
