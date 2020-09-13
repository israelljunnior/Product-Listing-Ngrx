import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { Observable, timer, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { list } from './product.ngrx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products$: Observable<any>
  constructor(private store: Store<{ products }>) { }

  ngOnInit(): void {
      this.products$ = this.store.pipe(select('products'))
      this.store.dispatch(list())
      console.log(this.products$)
  }

}
