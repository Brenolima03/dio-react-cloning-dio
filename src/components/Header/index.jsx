import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import {
  Container, Wrapper, SearchInputContainer,
  Input, Row, Menu, MenuRight, UserPicture
} from "./styles";

const Header = ({ authenticated }) => {
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
    <Wrapper>
      <Container>
        <Row>
        <a href="/">
          <img src={logo} alt="Logo da dio" />
        </a>
        {authenticated ? (
          <>
            <SearchInputContainer>
              <Input placeholder="Buscar..." />
            </SearchInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
          </>
        ) : null}
        </Row>
        <Row>
          {authenticated ? (
            <UserPicture src={catImage} alt="Cat Avatar" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button onClick={
                () => window.location.href = "/login"} title="Entrar"
              />
              <Button onClick={
                () => window.location.href = "/signup"} title="Cadastrar"
              />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};
export { Header };
  