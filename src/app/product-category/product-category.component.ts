import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../common/product-category';
import { ProductCategorysService } from '../services/product-categorys-service';
import { ActivatedRoute, RouterModule,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  productCategories: ProductCategory[] = []; 

  constructor(private productCategoryService: ProductCategorysService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProductCategories();
    })
  }

  listProductCategories() {
    this.productCategoryService.getProductCategories().subscribe(data => {
      this.productCategories = data; 
    });
  }
}

