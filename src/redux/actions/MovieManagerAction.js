import { movieManagerService } from "services/MovieManagerService.js";
import {
  SET_MOVIES,
  SET_MOVIE_INFO,
  SET_CINEMA,
  SET_CINEPLEX,
} from "./types/MovieManagerType";
//setAccessToken
export const getAccessTokenAction = () => {
  const account = {
    taiKhoan: "doremon",
    matKhau: "doremon",
  };
  return async (dispatch) => {
    try {
      const res = await movieManagerService.getAccessToken(account);
      localStorage.setItem("accessToken", res.data.content.accessToken);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const fetchMoviesAction = (nameMovie = "") => {
  return async (dispatch) => {
    try {
      const result = await movieManagerService.fetchMovies(nameMovie);
      dispatch({
        type: SET_MOVIES,
        payload: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const addMovieByUploadImageAction = (
  formData,
  AddNewsuccess,
  alertError
) => {
  return async (dispatch) => {
    try {
      await movieManagerService.addMovieByUploadImage(formData);
      AddNewsuccess();
    } catch (error) {
      alertError(error.response?.data.content);
      console.log("error", error.response?.data);
    }
  };
};

export const uploadMovieUpdateAction = (formData, Editsuccess, alertError) => {
  return async (dispatch) => {
    try {
      await movieManagerService.uploadMovieUpdate(formData);
      //reload movieList
      Editsuccess();
      dispatch(fetchMoviesAction());
    } catch (error) {
      alertError(error.response?.data.content);
      console.log("error update movie", error.response?.data);
    }
  };
};

export const getMovieInfoAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await movieManagerService.getMovieInfo(id);
      dispatch({
        type: SET_MOVIE_INFO,
        payload: result.data.content,
      });
      console.log(result.data.content);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const deleteMovieAction = (id, Deletesuccess) => {
  return async (dispatch) => {
    try {
      const result = await movieManagerService.deleteMovie(id);
      console.log("resultDeleteMovie", result.data.content);
      Deletesuccess()
      //reload movieList
      dispatch(fetchMoviesAction());
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getCinemaInfoAction = (cinemaID = "") => {
  return async (dispatch) => {
    try {
      const res = await movieManagerService.getCinemaInfo(cinemaID);
      dispatch({
        type: SET_CINEMA,
        payload: res.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getCineplexInfoAction = (cinemaID = "") => {
  return async (dispatch) => {
    try {
      const res = await movieManagerService.getCineplexInfo(cinemaID);
      dispatch({
        type: SET_CINEPLEX,
        payload: res.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const createShowTimesAction = (formData, createShowtimesSuccess) => {
  return async (dispatch) => {
    try {
      await movieManagerService.createShowtimes(formData);
      alert("add showtimes successfull");
      createShowtimesSuccess();
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};
