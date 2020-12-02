import React from "react";
import { Stars } from "./styles";
import Star from "../../assets/icons/star.svg";

export default ({ qtdStar }) => {
  return (
    <Stars>
      {qtdStar > 0 ? <Star height="18" width="18" fill="#FFBE23" /> : null}
      {qtdStar > 1 ? <Star height="18" width="18" fill="#FFBE23" /> : null}
      {qtdStar > 2 ? <Star height="18" width="18" fill="#FFBE23" /> : null}
      {qtdStar > 3 ? <Star height="18" width="18" fill="#FFBE23" /> : null}
      {qtdStar > 4 ? <Star height="18" width="18" fill="#FFBE23" /> : null}
    </Stars>
  );
};
