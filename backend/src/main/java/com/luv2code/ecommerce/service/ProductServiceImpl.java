package com.luv2code.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.luv2code.ecommerce.dao.ProductRepository;
import com.luv2code.ecommerce.entity.Product;

@Service
public class ProductServiceImpl implements ProductService{
	
	private ProductRepository productRepository;
	
	@Autowired
	public ProductServiceImpl(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}


	@Override
	public Product createProduct(Product product) {
		// TODO Auto-generated method stub
		
		productRepository.save(product);
		
		return product;
	}

	@Override
	public Product updateProduct(Product product) {
		// TODO Auto-generated method stub

		productRepository.save(product);
		
		return product;
	}

	@Override
	public void deleteProduct(Product product) {
		// TODO Auto-generated method stub
		productRepository.delete(product);
	
	}

}
