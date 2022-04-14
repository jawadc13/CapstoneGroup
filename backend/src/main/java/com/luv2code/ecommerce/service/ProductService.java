package com.luv2code.ecommerce.service;

import org.springframework.web.bind.annotation.RequestBody;

import com.luv2code.ecommerce.entity.Product;

public interface ProductService {
	
	Product createProduct(@RequestBody Product product);
	Product updateProduct(@RequestBody Product product);
	void deleteProduct(@RequestBody Product product);

}
