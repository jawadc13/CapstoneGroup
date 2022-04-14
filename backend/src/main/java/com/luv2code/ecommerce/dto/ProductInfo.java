package com.luv2code.ecommerce.dto;

import java.math.BigDecimal;
import java.util.Date;

import com.luv2code.ecommerce.entity.ProductCategory;

import lombok.Data;

@Data
public class ProductInfo {
	
	private long id;
	
	private ProductCategory category;
	
	private String sku;
	
	private String name;
	
	private String description;
	
	private BigDecimal unitPrice;

	private String imageUrl;
	
	private boolean active;
	
	private int unitInStock;
	
	private Date lastUpdated;

}
