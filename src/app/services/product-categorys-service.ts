import { HttpClient } from "@angular/common/http";
import { ProductCategory } from "../common/product-category";
import { map, Observable } from "rxjs";
import { constants } from "buffer";
import { Constants } from "../constants";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ProductCategorysService {


  private rootUrl: string;


  constructor(private httpClient: HttpClient) { 
    this.rootUrl = `${Constants.BACKEND_API_URL}`;
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(`${this.rootUrl}/api/product-category`)
      .pipe(map(response => response._embedded.productCategories));
  }
}

// Interface for mapping the response
interface GetResponseProductCategory {
  _embedded: {
    productCategories: ProductCategory[];
  };
}