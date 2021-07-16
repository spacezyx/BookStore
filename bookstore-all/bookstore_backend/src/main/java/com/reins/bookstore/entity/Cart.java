package com.reins.bookstore.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "cart")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class Cart {
    @Id
    private Integer cartId;
    private Integer customerId;
    private Integer bookId;
    private String bookTitle;
    private String bookImage1;
    private BigDecimal bookPrice;

}
