import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      const responses = await Promise.all(
        Array.from({ length: 10 }).map(() =>
          fetch("https://api.thecatapi.com/v1/images/search")
          .then(response => response.json())
        )
      );
      const images = responses.map(data => data[0].url);
      setCatImages(images);
    };
    fetchCatImages();
  }, []);

  return (
    <>
      <Header authenticated={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          {catImages.map((catImage, index) => (
            <Card key={index} catImage={catImage} /> // Pass catImage to Card
          ))}
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          {catImages.slice(0, 4).map((catImage, index) => (
            // Use first 4 cat images for UserInfo
            <UserInfo 
              key={index} 
              nome={`User ${index + 1}`} 
              image={catImage} // Pass cat image here
              // Random percentage for demonstration
              percentual={Math.floor(Math.random() * 100)}
            />
          ))}
        </Column>
      </Container>
    </>
  );
};
export { Feed };
