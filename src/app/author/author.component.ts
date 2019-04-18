import { Component, OnInit } from '@angular/core';
import { AuthorModel } from './author-model';
import { AuthorFollowModel } from './author-follow-model';
import { AuthorUnfollowModel } from './author-unfollow-model';
import { Subscription } from 'rxjs';
import { AuthorService } from './author.service';

/**
 *  Author page component
 *  @export
 *  @class AuthorComponent
 *  @implements {OnInit}
 */
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  /**
   * Author Subscription
   * @private
   * @type {Subscription}
   * @memberof AuthorComponent
   */
  private authorSubscription: Subscription;

  /**
   *  An object to fill with the JSON response
   *  @type {AuthorModel}
   *  @memberof AuthorComponent
   */
  authorInfo: AuthorModel;

  /**
   * Object to fill data
   * @type {AuthorFollowModel}
   * @memberof AuthorComponent
   */
  authorFollow: AuthorFollowModel;

  /**
   * Object to fill data
   * @type {AuthorUnfollowModel}
   * @memberof AuthorComponent
   */
  authorUnfollow: AuthorUnfollowModel;

  /**
   *  Author's Id
   */
  authorId = '';

  /**
   *  Name of the author
   */
  authorName = '';

  /**
   *  Link to the author's picture
   */
  authorPicture = '';

  /**
   *  Is the currently signed in user following this author or not
   */
  authorIsFollowing: boolean;

  /**
   *  Number of users following this author
   */
  authorNumberOfFollowers = '';

  /**
   *  More details about this author
   */
  authorDetails = '';

  /**
   *  Follows an author
   *  @memberof AuthorComponent
   */
  followAuthor() {
    this.authorService.followAuthor();

    this.authorSubscription = this.authorService.getFollowAuthorUpdated()
      .subscribe((authorFollow: AuthorFollowModel) => {
        console.log('Following this author');
        this.authorFollow = authorFollow;
        this.authorIsFollowing = this.authorFollow.success;
      }, (error: { json: () => void; }) => {
        console.log(error);
      });
  }

  /**
   *  Unfollows an author
   *  @memberof AuthorComponent
   */
  unfollowAuthor() {
    this.authorIsFollowing = false;
    console.log('Unfollowing this author');
    this.authorService.unfollowAuthor();
    this.authorSubscription = this.authorService.getUnfollowAuthorUpdated()
      .subscribe((authorUnfollow: AuthorUnfollowModel) => {
        this.authorUnfollow = authorUnfollow;
        this.authorIsFollowing = this.authorUnfollow.success;
        console.log('Unfollowing this author');
      }, (error: { json: () => void; }) => {
        console.log(error);
      });
  }

  /**
   * If user is not signed in
   * follow author button is shown
   * @memberof AuthorComponent
   */
  setIsFollowing() {
    if (localStorage.getItem('userId') === null) {
      this.authorIsFollowing = false;
    }
  }

  /**
   *  Creates an instance of AuthorComponent.
   *  @param {AuthorService} authorService
   *  @memberof AuthorComponent
   */
  constructor(public authorService: AuthorService) { }

  /**
   *  Author component initialization
   *  @memberof AuthorComponent
   */
  ngOnInit() {
    this.setIsFollowing();
    this.authorService.getAuthorInfo();

    this.authorSubscription = this.authorService.getAuthorInfoUpdated()
      .subscribe((authorInformation: AuthorModel) => {
        this.authorInfo = authorInformation;

        this.authorId = this.authorInfo.authorId;
        this.authorName = this.authorInfo.authorName;
        this.authorPicture = this.authorInfo.authorPicture;
        this.authorNumberOfFollowers = this.authorInfo.authorNumberOfFollowers;
        this.authorDetails = this.authorInfo.authorDetails;
        this.authorIsFollowing = this.authorInfo.authorIsFollowing;
      }, (error: { json: () => void; }) => {
        console.log(error);
      });
  }
}
