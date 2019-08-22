import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable()
export class DataService {
  baseUrl = 'http://localhost:8000/api/v1/';

  constructor(private httpClient: HttpClient) {

  }

  get_products() {
    return this.httpClient.get(this.baseUrl);
  }

  getProduct(id: string) {
    return this.httpClient.get(`${this.baseUrl}${id}`);
  }

  post_product(product) {
    return this.httpClient.post(this.baseUrl, product);
  }

  delete_product(id: string) {
    return this.httpClient.delete(`${this.baseUrl}${id}`);
  }

  updateProduct(id: string, product) {
    return this.httpClient.put(`${this.baseUrl}${id}/`, product);
  }
}
