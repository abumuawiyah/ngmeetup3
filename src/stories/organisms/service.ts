import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable, of, BehaviorSubject, throwError } from "rxjs";

import { catchError, tap } from "rxjs/operators";

import { IUser, IResponse } from "./interfaces";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private userUrl = "https://randomuser.me/api/?page=1&results=10&seed=abc";
  private response: IResponse;

  private selectedUserSource = new BehaviorSubject<IUser | null>(null);
  selectedUserChanges$ = this.selectedUserSource.asObservable();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IResponse> {
    if (this.response) {
      return of(this.response);
    }
    return this.http.get<IResponse>(this.userUrl).pipe(
      tap(data => console.log("All users", JSON.stringify(data.results))),
      tap(data => (this.response = data)),
      catchError(this.handleError)
    );
  }

  private initializeProduct(): IUser {
    // Return an initialized object
    return {
      gender: "",
      name: {},
      location: {},
      email: "",
      login: {},
      dob: {},
      registered: {},
      phone: "",
      cell: "",
      id: {},
      picture: {},
      nat: ""
    };
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
