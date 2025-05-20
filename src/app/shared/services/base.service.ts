import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map, Observable, retry, throwError} from 'rxjs';
import {BaseAssembler} from './base-assembler.assembler';

/**
 * Abstract base service class providing common CRUD operations for REST API endpoints.
 * @template T The type of resource this service manages
 */
export abstract class BaseService<TResponse, TEntity> {
  protected httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  protected serverBaseUrl: string =  `${environment.serverApiBaseUrl}`;
  protected resourceEndpoint: string = '/resources';

  constructor(
    protected http: HttpClient,
    protected assembler: BaseAssembler<TResponse, TEntity>) {}

  protected handleError(error: HttpErrorResponse) {
    console.error('HTTP error:', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  protected resourcePath(): string {
    return `${this.serverBaseUrl}${this.resourceEndpoint}`;
  }

  public getAll(): Observable<TEntity[]> {
    return this.http.get<TResponse[]>(this.resourcePath(), this.httpOptions)
      .pipe(
        retry(2),
        map(response => this.assembler.toEntitiesFromResponse(response)),
        catchError(this.handleError)
      );
  }

  public getById(id: any): Observable<TEntity> {
    return this.http.get<TResponse>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(
        map(response => this.assembler.toEntityFromResource(response)),
        catchError(this.handleError)
      );
  }

  public create(resource: TResponse): Observable<TEntity> {
    return this.http.post<TResponse>(this.resourcePath(), JSON.stringify(resource), this.httpOptions)
      .pipe(
        map(response => this.assembler.toEntityFromResource(response)),
        catchError(this.handleError)
      );
  }

  public update(id: any, resource: TResponse): Observable<TEntity> {
    return this.http.put<TResponse>(`${this.resourcePath()}/${id}`, JSON.stringify(resource), this.httpOptions)
      .pipe(
        map(response => this.assembler.toEntityFromResource(response)),
        catchError(this.handleError)
      );
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
