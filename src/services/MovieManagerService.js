import { FILMGROUPID } from "util/settings/config";
import { BaseService } from "./BaseService";

export class MovieManagerService extends BaseService {
  constructor() {
    super();
  }

  getListBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  getListFilm = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${FILMGROUPID}`);
  };
}

export const movieManagerService = new MovieManagerService();