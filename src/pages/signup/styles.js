import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  max-width: 90%;
  margin-bottom: 20px;
  line-height: 44px;
  color: #FFFFFF;
`;

export const TitleSignUp = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 44px;
  margin-bottom: 8px;
`;

export const SubtitleSignUp = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 5px;
`;

export const Login = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: inherit; // Base color for "Ja tenho conta."
  margin-right: 10px;
  text-decoration: none;
  span {
    color: #23DD7A; // Green color for "Fazer login"
  }
`;
