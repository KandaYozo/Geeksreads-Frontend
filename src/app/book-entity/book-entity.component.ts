import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-entity',
  templateUrl: './book-entity.component.html',
  styleUrls: ['./book-entity.component.css']
})
export class BookEntityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  more_book_discription() {
    const dots = document.getElementById('dots_book_discription');
    const moreText = document.getElementById('more_book_discription');
    const btnText = document.getElementById('myBtn_book_discription');
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'Read more';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'Read less';
      moreText.style.display = 'inline';
    }
  }

}
