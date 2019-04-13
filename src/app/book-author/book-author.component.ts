import { Component, OnInit } from '@angular/core';
import { AuthorDetails } from './book-author.model';
import { Subscription } from 'rxjs';
import { AuthorDetails_Service } from './book-author.service';
import { delay } from 'q';

@Component({
  selector: 'app-book-author',
  templateUrl: './book-author.component.html',
  styleUrls: ['./book-author.component.css']
})
export class BookAuthorComponent implements OnInit {

  authorname: string [] = [];
  authorid: string [] = [];
  authorbody: string [] = [];
  authorfollowers: string [] = [];
  bookid: string [] = [];
  authorimage: string [] = [];
  // tslint:disable-next-line:variable-name
  public befor_dots: string [] = [];
// tslint:disable-next-line: variable-name
  public after_dots: string [] = [];
// tslint:disable-next-line: variable-na
  /**
   *
   * server subscription
   * @private
   * @type {Subscription}
   * @memberof BookAuthorComponent
   */
  private Sub_profile: Subscription;
  // tslint:disable-next-line:variable-name
  /**
   *
   * variable to carry recieved author details list from services.ts
   * @type {AuthorDetails[]}
   * @memberof BookAuthorComponent
   */
  public author_details: AuthorDetails[] = [];
  // tslint:disable-next-line:variable-name
  /**
   *
   * index of the current author in the list
   * @memberof BookAuthorComponent
   */
  author_index = 0;
  // tslint:disable-next-line:variable-name
  /**
   * Creates an instance of BookAuthorComponent.
   * @param {AuthorDetails_Service} authordetails_service
   * @memberof BookAuthorComponent
   */
  constructor(public authordetails_service: AuthorDetails_Service) { }
  /**
   *
   * function used to read author list from services.ts
   * @memberof BookAuthorComponent
   */
  ngOnInit() {
    this.authordetails_service.get_author_Info();                                  // to get the user info from the service
    // tslint:disable-next-line:variable-name
    this.Sub_profile = this.authordetails_service.get_author_details_updated().subscribe((author_Information: AuthorDetails[]) => {
      this.author_details = author_Information;
      this.SplitString();
      this.SetElements();
      /* console.log(this.User_info.User_Name)
      console.log(this.User_info.user_id)
      console.log(this.User_info.User_Photo)*/
    });
  }
  SplitString() {
    let starting_indext = 0;
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.author_details.length; i ++) {
      const word = this.author_details[i].author_body.split(',');
      this.befor_dots[starting_indext] = word[0];
      this.after_dots[starting_indext] = word[1];
      starting_indext++;
    }
  }
  SetElements() {
    // tslint:disable-next-line: prefer-for-of
        for (let x = 0; x < this.author_details.length; x++) {
          this.authorname[x] = this.author_details[x].author_name;
          this.authorid[x] = this.author_details[x].author_id;
          this.authorbody[x] = this.author_details[x].author_body;
          this.authorfollowers[x] = this.author_details[x].author_followers;
          this.bookid[x] = this.author_details[x].book_id;
          this.authorimage[x] = this.author_details[x].author_image;
        }
      }
  /**
   *
   * function used to show hidden information of the author details
   * @memberof BookAuthorComponent
   */
  more_author_details() {
    const dots = document.getElementById('dots-author-discription');
    const moreText = document.getElementById('more-author-discription');
    const btnText = document.getElementById('myBtn-author-discription');
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
