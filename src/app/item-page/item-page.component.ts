import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/items/items.service';
import { Item } from '../shared/models/Item';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  item!: Item;

  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemsService) { 
    activatedRoute.params.subscribe((params) =>  {
      if(params.title)
      this.item = itemService.getItemByTitle(params.title)

    })
  }

  ngOnInit(): void {
  }

}
