import { FiThumbsUp } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { 
  CardContainer,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles";

const Card = () => {
  const [catImage, setCatImage] = useState("");

  useEffect(() => {
    const fetchCatImage = async () => {
      const response =
        await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      setCatImage(data[0].url);
    };
    fetchCatImage();
  }, []);
  return (
    <CardContainer>
      <Content>
        <UserInfo>
        <UserPicture
          src={catImage} alt="Cat Avatar" />
        <div>
          <h4>User</h4>
          <p>Há 8 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>
            Projeto feito no curso de html e css no bootcamp da dio do Globa
            vanade...
            <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};
export { Card };
