import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items/items.service';
import { Item } from '../shared/models/Item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: Item[] = [];
  p: number = 1;
  collection: any[] | undefined



  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.searchTerm)
        this.items = this.itemsService
          .getAll()
          .filter((item) =>
            item.title.toLowerCase().includes(params.searchTerm.toLowerCase())
          );
      else this.items = this.itemsService.getAll();
    });
    this.items = this.itemsService.getAll();
  }
}
