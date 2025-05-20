export interface BaseAssembler<TResponse, TEntity> {
  toEntityFromResource(resource: TResponse): TEntity;
  toEntitiesFromResponse(response: TResponse[]): TEntity[];
}
