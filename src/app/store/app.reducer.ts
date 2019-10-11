import * as fromRouter from '@ngrx/router-store';
import { getSelectors } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// export interface RouterStateUrl {
//   url: string;
//   params: Params;
//   queryParams: Params;
// }

// @Injectable()
// export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
//   serialize(routerState: RouterStateSnapshot): RouterStateUrl {
//     let route = routerState.root;
//
//     while (route.firstChild) {
//       route = route.firstChild;
//     }
//
//     const {
//       url,
//       root: { queryParams }
//     } = routerState;
//     const { params } = route;
//
//     // Only return an object including the URL, params and query params
//     // instead of the entire snapshot
//     return { url, params, queryParams };
//   }
// }

export interface IState {
  router: fromRouter.RouterReducerState;
}

export const selectRouter = createFeatureSelector<IState, fromRouter.RouterReducerState>('router');

const {
  selectQueryParams,
  selectRouteParams,
  selectRouteData,
  selectUrl
} = getSelectors(selectRouter);


export const reducers: ActionReducerMap<IState> = {
  router: fromRouter.routerReducer
};
