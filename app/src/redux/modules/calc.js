/**
 * Created by abhisheksingh on 24/09/16.
 */

const MATH_OPERATION = 'math_operation';
const CLEAR_ALL = 'clear_all';

const initialState = {
  displayString: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR_ALL: {
      return {displayString: action.value};
    }
    case MATH_OPERATION: {
      return {displayString: action.value};
    }
    default:
      return state
  }
}

export function updateValue(value) {
  return {type: MATH_OPERATION, value};
}

export function mathOperation(value) {
  return {type: MATH_OPERATION, value};
}

export function clearAll(value) {
  return {type: MATH_OPERATION, value};
}

