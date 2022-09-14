import { movieManagerService } from "services/MovieManagerService.js";
import { SET_MOVIES } from "./types/MovieManagerType";

export const fetchMoviesAction = () => {
  return async (dispatch) => {
    try {
      const result = await movieManagerService.getListFilm();
      dispatch({
        type: SET_MOVIES,
        payload: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};