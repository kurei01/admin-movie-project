import { SET_FILM_PLAYING, SET_FILM_UPCOMING, SET_MOVIES } from "redux/actions/types/MovieManagerType";

const initialState = {
  lstFilm: [
    {
      maPhim: 1296,
      tenPhim: "Avengers: Infinity War ",
      biDanh: "avengers-infinity-war",
      trailer: "https://www.youtube.com/embed/DKqu9qc-5f4",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
      moTa: "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ],
  lstFilmDefault: [],
  filmIsPlaying: true,
  filmUpComing: true,
};

export const MovieManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES: {
      state.lstFilm = action.payload;
      state.lstFilmDefault = action.payload;
      return { ...state };
    }

    case SET_FILM_PLAYING: {
      state.filmIsPlaying = !state.filmIsPlaying;
      state.lstFilm = state.lstFilmDefault.filter((film) => film.dangChieu === state.filmIsPlaying);
      return { ...state };
    }

    case SET_FILM_UPCOMING: {
      state.filmUpComing = !state.filmUpComing;
      state.lstFilm = state.lstFilmDefault.filter((film) => film.sapChieu === state.filmUpComing);
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};