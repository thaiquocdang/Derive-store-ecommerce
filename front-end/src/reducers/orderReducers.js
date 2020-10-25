import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  GET_MY_ORDERS_REQUEST,
  GET_MY_ORDERS_SUCCESS,
  GET_MY_ORDERS_FAIL,
  GET_MY_ORDERS_RESET,
} from "../constants/orderConstants";

//place order reducer
const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };

    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload };

    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
 
    default:
      return state;
  }
};

//get order details reducer
const orderDetailsReducer = (state = { loading: true, orderItems: [], shippingAddress: {} }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };

    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
 
    default:
      return state;
  }
}

//update order to PAID reducer
const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true }

    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true }

    case ORDER_PAY_FAIL:
      return { loading: false, error: action.payload }

    case ORDER_PAY_RESET:
      return { }
 
    default:
      return state;
  }
};

const getMyOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case GET_MY_ORDERS_REQUEST:
      return { loading: true }

    case GET_MY_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload }

    case GET_MY_ORDERS_FAIL:
      return { loading: false, error: action.payload }

    case GET_MY_ORDERS_RESET:
      return { orders: [] }
 
    default:
      return state;
  }
};

export { orderCreateReducer, orderDetailsReducer, orderPayReducer, getMyOrdersReducer }
