import React from "react";
import styleLoading from "./Loading.module.css";
import { useSelector } from "react-redux";

export default function LoadingComponent() {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  if (isLoading) {
    return (
      <div className={styleLoading.bgLoading}>
        <img src={require('assets/imgLoading/loading.gif')} alt="" />
      </div>
    );
  } else {
    return "";
  }
}
