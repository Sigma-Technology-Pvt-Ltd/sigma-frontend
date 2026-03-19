import { Container } from "react-bootstrap";
import styled, { css } from "styled-components";

export const HeaderInfo = styled.div`
  svg {
    fill: ${(props) => props.theme.cloudColor};
  }
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const HeaderIcon = styled.div``;

export const HeaderItem = styled.div``;

export const NavigationIcon = styled.div``;

export const HeaderTopContainer = styled(Container)`
  background: ${(props) => props.theme.logoColor};
  padding: 10px 30px;
  font-family: ${(props) => props.theme.regularFont};
  a {
    text-decoration: none;
    color: #f2f2f2;
    font-size: 14px;
    font-weight: 400;

    i {
      font-size: 16px;
    }
    svg {
      fill: #f2f2f2;
    }
  }

  ${HeaderInfo} {
    ${HeaderItem} {
      &:first-child {
        border-right: 1px solid #ffffff40;
      }
    }
  }
`;
// navigation css

export const NavigationLogo = styled.div`
  width: 140px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NavigationMenu = styled.ul`

`;

export const NavigationItem = styled.div``;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
export const NavigationInfo = styled.div`
  span{
    color:${props => props.theme.secondary}!important;
  }
`;

export const NavigationAdditional = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// dropdown css
export const DropDownContainer = styled.div``;

export const DropDownList = styled.div`
  margin-bottom: 0;
  list-style: none;
  padding: 0;
  position: relative;

  .define {
    ul {
      padding: 0;
      grid-gap: 0;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      margin-bottom: 1rem;

      li {
        display: inline-block;
        margin-right: 1.5rem;
        min-width: 30%;

        & > a {
          margin-bottom: 10px;
        }

        &.min-width {
          min-width: 27.5%;
        }

        &:first-child {
          width: 35%;
        }

        ul {
          li {
            min-width: 100%;

            a {
              font-size: 14px;
              text-align: left;
              font-weight: 500;
              margin-bottom: 0;
              text-transform: capitalize;

              &:hover {
                color: ${(props) => props.theme.primary} !important;
              }
            }

            ul {
              display: grid;
              padding: 0;
              margin: 0;
              width: max-content;

              li {
                width: max-content;
                margin-left: -5px;

                a {
                  font-weight: 400;
                  width: max-content;

                  &:hover {
                    transform: translate(10px, 0px);
                    color: ${(props) => props.theme.secondary} !important;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const DropDownListItem = styled.li``;
export const DropDownSubContainer = styled.div``;

export const BorderBottom = css`
  border-radius: 0px 0px 7px 7px;
`;
export const DropDownTransformBefore = css`
  webkit-transform: translateY(15px);
  -moz-transform: translateY(15px);
  -ms-transform: translateY(15px);
  -o-transform: translateY(15px);
  transform: translateY(15px);
`;
export const DropDownTransformAfter = css`
  webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -ms-transform: translateY(0px);
  -o-transform: translateY(0px);
  transform: translateY(0px);
`;
export const SmoothTransition = css`
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
`;
export const DropDownTransformRight = css`
  -webkit-transform: translateX(15px);
  -moz-transform: translateX(15px);
  -ms-transform: translateX(15px);
  -o-transform: translateX(15px);
  transform: translateX(15px);
`;
export const DropDownTransformLeft = css`
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  -ms-transform: translateX(0px);
  -o-transform: translateX(0px);
  transform: translateX(0px);
`;
export const NavigationContainer = styled.div`
  padding: 0px 30px;
  border-bottom: 1px solid #00000014;
  font-family: ${(props) => props.theme.primaryFont};
  background: ${(props) => props.theme.white};

  nav {
    position: relative;
  }

  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    transition: 0.3s linear;
    background-color: #fff;
    z-index: 99;
  }
  ${NavigationMenu} {
    position: relative;
    li {
      ${SmoothTransition}
      a {
        color: #212121;
        padding: 30px 20px;
        text-transform: uppercase;
        font-family: ${(props) => props.theme.primaryFont};
        font-weight: 700;
        font-size: 14px;
        transition: all 0.3s ease;

        &:hover{
           color: ${(props) => props.theme.logoColor};
        }

        &.active {
          color: ${(props) => props.theme.logoColor};
          &:after {
            ${"" /* content: ''; */}
            width: 50%;
            height: 3px;
            position: absolute;
            bottom: -3px;
            left: 50%;
            transform: translateX(-50%);
            background: ${(props) => props.theme.logoColor};
          }
        }

        .material-symbols-outlined {
          font-variation-settings:
            "FILL" 0,
            "wght" 200,
            "GRAD" 0,
            "opsz" 24;
        }
      }
      &:hover {
        ${DropDownContainer} {
          opacity: 1;
          visiblity: visible;
          ${DropDownTransformAfter}
          ${SmoothTransition}
               display: block;
        }
      }
    }
    ${DropDownContainer} {
      position: absolute;
      top: 82px;
      right: 0;
      background: ${(props) => props.theme.white};
      opacity: 0;
      display: none;
      visiblity: hidden;
      z-index: 100;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      min-width: fit-content;

      ${DropDownTransformBefore}
      ${BorderBottom}
         ${SmoothTransition}
         ${DropDownList} {
        list-style-type: none;
        padding-left: 0px;
        ${BorderBottom}
        ${DropDownListItem} {
          position: relative;
          &:hover {
            a {
              span {
                transform: rotate(-90deg);
                ${SmoothTransition}
              }
            }
            ${DropDownSubContainer} {
              display: block;
              opacity: 1;
              visibility: visible;
              ${DropDownTransformLeft}
            }
          }
          a {
            padding: 10px 20px;
            font-size: 14px;
            display: block;
            font-weight: normal;
            color: #666;
            text-transform: capitalize;
            width: 260px;
            &:hover {
              color: ${(props) => props.theme.primary};
            }
            span {
              ${SmoothTransition}
            }
          }
          ${DropDownSubContainer} {
            position: absolute;
            top: 0px;
            left: 255px;
            background: ${(props) => props.theme.white};
            opacity: 0;
            visibility: hidden;
            ${DropDownTransformRight}
            ${SmoothTransition}
                  ${BorderBottom}
                  border-top-right-radius: 7px;
          }
        }
      }
    }
  }
  ${NavigationWrapper} {
    &:first-child {
      font-family: ${(props) => props.theme.primaryFont};
      span {
        color: #677289;
        font-size: 13px;
        font-family: ${(props) => props.theme.primaryFont};
      }
      a {
        color: #ee6196;
        font-size: 15px;
        font-weight: 700;
        font-family: ${(props) => props.theme.primaryFont};
        display: block;
      }
    }

    ${NavigationIcon} {
      img {
        width: 36px;
        height: 36px;
      }
    }
  }
`;

// Mobile Menu css
export const MobileMenuButton = styled.div`
  cursor: pointer;
  display: none;
`;

// responsive css;
export const HeaderContainer = styled.header`
  @media only screen and (max-width: 900px) {
    ${NavigationContainer} {
      padding: 10px 30px;
    }
    ${NavigationMenu} {
      display: none;
    }
    ${NavigationAdditional} {
      display: none !important;
    }
    ${MobileMenuButton} {
      display: block;
    }
  }
  @media only screen and (max-width: 600px) {
    ${HeaderTopContainer} {
      display: none !important;
    }
  }
`;
