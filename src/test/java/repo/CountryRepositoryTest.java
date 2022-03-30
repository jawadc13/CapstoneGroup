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

import com.luv2code.ecommerce.dao.CountryRepository;
import com.luv2code.ecommerce.entity.Country;
import com.luv2code.ecommerce.entity.State;

@ExtendWith(MockitoExtension.class)
public class CountryRepositoryTest {
	
	@Mock
	CountryRepository repo;
	

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this);

	}

	@Test
	public void getAllCountriesTest() {

		ArrayList<Country> country = new ArrayList<Country>();

		Country e = Mockito.mock(Country.class);
		
		State state = new State();

		e.setId((int) 1);
		e.setName("Brazil");
		
		state.setId(1);
		state.setName("Amapa");
		e.getStates().add(state);
		
		state.setId(2);
		state.setName("Acre");
		e.getStates().add(state);

		country.add(e);

		e.setId((int) 2);
		e.setName("United States");
		state.setId((int) 1);
		state.setName("Maine");
		e.getStates().add(state);
		
		state.setId((int) 2);
		state.setName("Mississippi");
		country.add(e);

		repo.saveAll(country);
		
		
		verify(repo, times(1)).saveAll(country);

		when(repo.findAll()).thenReturn(country);

		Assertions.assertFalse(repo.findAll().isEmpty());

	}

}
