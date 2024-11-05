import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 20px;
  border: none;
  position: relative;
  color: #FFFFFF;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  margin-right: 10px;

  ${ ({ variant }) => variant !== "primary" && css`
    min-width: 170px;
    height: 33px;
    background: #E4105D;

    &::after {
      content: "";
      position: absolute;
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
    }
  `}
`;
