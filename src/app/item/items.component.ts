import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core'

import { Item } from './item'
import { ItemService } from './item.service'
import { ItemDetailComponent } from './item-detail.component'
import { ListViewComponent, NativeScriptRouterModule } from '@nativescript/angular'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
  standalone: true,
  imports: [
    ItemDetailComponent,
    ListViewComponent,
    NativeScriptRouterModule,
  ],
  schemas:[NO_ERRORS_SCHEMA],
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }
}
