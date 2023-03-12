import actions from './actions';

export default function reducer(state, action) {
  const fn = actions[action.type];
  return fn ? fn(state, action.payload) : state;
}
