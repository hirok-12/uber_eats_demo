import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  restaurantsList: [],
};

export const restaurantsActionTyps = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

// stateとは初期状態であれば先ほど定義したinitialStateが、あるいは加工後のstateが入ります。
// またactionにはreducerを使う側が指定したrestaurantsActionTypsのいずれかが入ります。
export const restaurantsReducer = (state, action) => {
  switch (action.type) {
    case restaurantsActionTyps.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case restaurantsActionTyps.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: action.payload.restaurants,
      };
    default:
      throw new Error();
  }
}