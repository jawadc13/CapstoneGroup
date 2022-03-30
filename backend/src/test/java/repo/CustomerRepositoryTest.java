package repo;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import com.luv2code.ecommerce.dao.CustomerRepository;
import com.luv2code.ecommerce.entity.Customer;

@ExtendWith(MockitoExtension.class)
public class CustomerRepositoryTest {

	@Mock
	private CustomerRepository repo;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this);

	}

	@Test
	public void getAllCustomersTest() {

		ArrayList<Customer> customer = new ArrayList<Customer>();

		Customer e = Mockito.mock(Customer.class);

		e.setId((long) 1);
		e.setEmail("johnDoe@gmail.com");
		e.setFirstName("john");
		e.setLastName("doe");

		customer.add(e);

		e.setId((long) 2);
		e.setEmail("leo@gmail.com");
		e.setFirstName("leo");
		e.setLastName("smith");

		customer.add(e);

		repo.saveAll(customer);

		verify(repo, times(1)).saveAll(customer);

		when(repo.findAll()).thenReturn(customer);

		Assertions.assertFalse(repo.findAll().isEmpty());

	}

}
