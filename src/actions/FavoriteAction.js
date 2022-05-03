import {
  TOGGLELIKE,

} from './actionTypes';

export const toggleLike = (payload, like) => {
  return {
    type: TOGGLELIKE,
    payload,
    like
  };
};

