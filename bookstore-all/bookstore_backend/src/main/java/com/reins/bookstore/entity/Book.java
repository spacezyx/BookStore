package com.reins.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;


import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "book")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "bookId")
public class Book {

    @Id
    @Column(name = "id")
    //generate
    private int bookId;
    private String isbn;
    private String title;
    private String author;
    private String type;
    private BigDecimal price;
    private String description;
    private Integer inventory;
    private Integer sales;
    private String image1;
}
