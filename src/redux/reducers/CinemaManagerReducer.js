import {
  SET_CINEMA,
  SET_CINEPLEX,
} from "redux/actions/types/CinemaManagerType";

const initialState = {
  cinema: [],
  cineplex: [],
};

export const CinemaManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CINEMA: {
      state.cinema = action.payload;
      return { ...state };
    }

    case SET_CINEPLEX: {
      state.cineplex = action.payload;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
