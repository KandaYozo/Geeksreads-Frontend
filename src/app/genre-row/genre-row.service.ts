import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Row } from './genre-row.model';

/**
 *
 * Injectable
 * @export
 * @class RowServices
 */
@Injectable({ providedIn: 'root' })
export class RowServices {

  /**
   * Creates an instance of RowServices.
   * @param {HttpClient} http
   * @memberof RowServices
   */
  constructor(private http: HttpClient) { }

  /**
   * Row
   * @private
   * @type {Row}
   * @memberof RowServices
   */
  private Row: Row;

  /**
   * Row Updated
   * @private
   * @memberof RowServices
   */
  private rowUpdated = new Subject<Row>();

  /**
   * This function gets the row info
   * @memberof RowServices
   */
  get_row(genre: string) {
    this.http
      .get('https://geeksreads.herokuapp.com/api/books/genre/', {
        params: {
          Genre: genre,
        }
      })
      .subscribe((serverResponse: any) => {
        console.log(serverResponse);
        this.http
        .get('https://geeksreads.herokuapp.com/api/api/books/id', {
          params: {
            id: serverResponse[0].BookId,
          }
        }).subscribe((serverResponse2: any) => {
          console.log(serverResponse);
          // Set Book Info
        }, (error: { json: () => void; }) => {
          console.log(error);
        });

        this.Row.bookimage1 = serverResponse[0].Cover;
        this.Row.bookimage2 = serverResponse[1].Cover;
        this.Row.bookimage3 = serverResponse[2].Cover;
      }, (error: { json: () => void; }) => {
        console.log(error);
      });
    // this.http.get<{ message: string, Row: Row }>('http://localhost:3000/api/genres').subscribe((RowData) => {
    //   this.Row = RowData.Row;
    //   this.rowUpdated.next(this.Row);
    // });
  }


  /**
   *
   * Gets the row updated info
   * @returns
   * @memberof RowServices
   */
  get_row_updated() {
    return this.rowUpdated.asObservable();
  }
}