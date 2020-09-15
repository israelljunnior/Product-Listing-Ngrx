import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { Observable, timer, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { list, add } from './product.ngrx';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products$: Observable<any>
  public productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  })

  constructor(private store: Store<{ products }>) { }

  ngOnInit(): void {
      this.products$ = this.store.pipe(select('products'))
      this.store.dispatch(list())
  }

  add() {
    this.store.dispatch(add({payload: {...this.productForm.value}}))
    this.productForm.reset()
  }

}
