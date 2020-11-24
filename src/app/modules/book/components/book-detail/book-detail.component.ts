import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  id: String = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }
}
