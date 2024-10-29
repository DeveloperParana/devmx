import { QueryFilter, QueryParams } from "@devmx/shared-api-interfaces";
import { QueryMongoFilter } from "../types";

export interface QueryMongoParams<T> extends Omit<QueryParams<T>, 'filter'> {
  filter?: QueryFilter<T> | QueryMongoFilter<T>
}
