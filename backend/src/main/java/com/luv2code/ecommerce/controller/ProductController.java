package com.luv2code.ecommerce.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luv2code.ecommerce.entity.Product;
import com.luv2code.ecommerce.service.ProductService;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping("api/product/service")
public class ProductController {
	
	private ProductService productService;
	
	public ProductController(ProductService productService) {
		this.productService = productService;
	}
	
	@PostMapping("/create")
	public Product createProduct(@RequestBody Product product) {
		productService.createProduct(product);
		log.info("create product");
		return product;
	}
	
	@PostMapping("/update")
	public Product updateProduct(@RequestBody Product product) {
		productService.updateProduct(product);
		log.info("update product");
		return product;
	}
	
	@PostMapping("/delete")
	public void deleteProduct(@RequestBody Product product) {
		productService.deleteProduct(product);
		log.info("delete product");
	}

}
