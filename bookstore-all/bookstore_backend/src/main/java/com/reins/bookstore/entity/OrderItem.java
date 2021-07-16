package com.reins.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import java.math.BigDecimal;

import javax.persistence.*;

@Data
@Entity
@Table(name = "order_item")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer order_id;
    //private Integer user_id;
    private String book_title;
    private BigDecimal book_price;
    private Integer book_num;
    //private String username;
}
