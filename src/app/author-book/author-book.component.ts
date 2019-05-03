import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

/**
 *  Author Book Component
 *  @export
 *  @class AuthorBookComponent
 *  @implements {OnInit}
 */
@Component({
  selector: 'app-author-book',
  templateUrl: './author-book.component.html',
  styleUrls: ['./author-book.component.css']
})
export class AuthorBookComponent implements OnInit {
  @Input() bookImage: string;
  @Input() bookName: string;
  @Input() bookRating: string;
  @Input() bookShelfStatus: string;
  @Input() bookId: string;
  /**
   *  Author Book Subscription
   *  @private
   *  @type {Subscription}
   *  @memberof AuthorBookComponent
   */
  private authorBookSubscription: Subscription;

  /**
   *  Author's Id
   *  @memberof AuthorBookComponent
   */
  authorId = 12345;

  /**
   *  Book's Id
   *  @memberof AuthorBookComponent
   */
  authorBookId = 12345;

  /**
   *  Name of the book
   *  @memberof AuthorBookComponent
   */
  authorBookName = 'Name of the Book: ' + this.bookName;

  /**
   *  Link to the book's picture
   *  @memberof AuthorBookComponent
   */
  authorBookPicture = 'https://via.placeholder.com/86x120' + this.bookImage;

  /**
   *  Current shelf assigned to the book
   *  @memberof AuthorBookComponent
   */
  authorBookShelf = 'Want to Read';

  /**
   *  Book rating
   *  @memberof AuthorBookComponent
   */
  authorBookRating = '3.81' + this.bookRating;

  /**
   *  Book link
   *  @memberof AuthorBookComponent
   */
  authorBookLink = 'https://www.goodreads.com/';

  /**
   *  Is this book in a shelf?
   *  @memberof AuthorBookComponent
   */
  authorBookIsInAShelf = false;

  /**
   *  Where is the book now
   *  @memberof AuthorBookComponent
   */
  shelfAction = 'Add to Shelf';

  /**
   *  Add book to a shelf
   *  @param {string} bookShelf
   *  @memberof AuthorBookComponent
   */
  bookShelf(bookShelf: string) {
    // TODO: Send request
    console.log('Adding this book to + ' + bookShelf);
  }

  /**
   *  Adds book to Want to Read Shelf
   */
  wantToRead() {
    // TODO: Send request
    this.authorBookIsInAShelf = true;
    this.shelfAction = 'Want to Read';
    document.getElementById('author-book-shelf-button').style.backgroundColor = '#f2f2f2';
    document.getElementById('author-book-shelf-button').style.color = '#000000';
    console.log('Adding to Want to Read Shelf');
  }

  /**
   *  Adds book to Currently Reading Shelf
   */
  currentlyReading() {
    // TODO: Send request
    this.authorBookIsInAShelf = true;
    this.shelfAction = 'Currently Reading';
    document.getElementById('author-book-shelf-button').style.backgroundColor = '#f2f2f2';
    document.getElementById('author-book-shelf-button').style.color = '#000000';
    console.log('Adding to Reading Shelf');
  }

  /**
   *  Adds book to Read Shelf
   */
  read() {
    // TODO: Send request
    this.authorBookIsInAShelf = true;
    this.shelfAction = 'Read';
    document.getElementById('author-book-shelf-button').style.backgroundColor = '#f2f2f2';
    document.getElementById('author-book-shelf-button').style.color = '#000000';
    console.log('Adding to Read Shelf');
  }

  /**
   *  Removes book from its current shelf
   */
  removeFromShelf() {
    // TODO: Send request
    this.authorBookIsInAShelf = false;
    this.shelfAction = 'Add to Shelf';
    document.getElementById('author-book-shelf-button').style.backgroundColor = '#409D69';
    document.getElementById('author-book-shelf-button').style.color = '#ffffff';
    console.log('Adding to Read Shelf');
  }


  /**
   *  Creates an instance of AuthorBookComponent.
   *  @param {AuthorBookService} authorBookService
   *  @memberof AuthorBookComponent
   */
  constructor() { }

  /**
   *  Author component initialization
   *  @memberof AuthorBookComponent
   */
  ngOnInit() {
  }
}
