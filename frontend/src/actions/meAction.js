export const SET_ME = 'SET_ME';

export function setLogedIn(me) {
  return {
    type: SET_ME,
    payload: me
  }
}
