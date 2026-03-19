import { Col, Container } from "react-bootstrap";
import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.footerColor};
  .footer__inner--wrap {
    background-color: #ededf9;

    .footer__inner {
      color: #212121;
      padding: 4rem 0;

      ul {
        margin-bottom: 0;
        padding-left: 0;
      }
      p {
        margin-bottom: 0;
      }

      .footer__block {
        @media (max-width: 992px) {
          display: none;
        }
        &.first {
          i {
            font-size: 23px;
          }
          svg {
            width: 19px;
            height: 17px;
          }
        }
        .footer__title {
          font-family: ${(props) => props.theme.primaryFontBold};
          font-size: 20px;
          text-transform: capitalize;
          color: ${(props) => props.theme.primary};
          margin-bottom: 1.5rem;
        }
        .footer__logo {
          display: block;
          width: 140px;
          height: 50px;
          img {
            mix-blend-mode: multiply;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .footer__text {
          font-size: 15px;
          padding: 1rem 0;
        }
        .footer__socials {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          .icon {
            width: 40px;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $white-color;
            transition: all 0.4s ease-in-out;

            clip-path: polygon(
              50% 0,
              100% 14px,
              100% calc(100% - 14px),
              50% 100%,
              0 calc(100% - 14px),
              0 14px
            );
            &:hover {
              background-color: ${(props) => props.theme.primary};
            }
          }
        }
        .footer__list {
          .footer__item {
            position: relative;
            margin-bottom: 1rem;
            transition: all 0.4s ease-in-out;
            text-transform: capitalize;
            font-weight: 500;
            font-size: 15px;
            a {
              color: #212121;
              transition: all 0.3s ease;

              &:hover {
                color: ${(props) => props.theme.primary};
              }
            }

            &.footer__info--item {
              display: flex;
              align-items: center;
              gap: 10px;
              margin-bottom: 1rem;
              text-transform: unset;
              font-variation-settings:
                "FILL" 0,
                "wght" 300,
                "GRAD" 0,
                "opsz" 24;
              &:last-child {
                align-items: start;
              }
              i {
                font-size: 20px;
                margin-right: 0.8rem;
              }
              ${
                "" /* span {
                        color: ${(props) => props.theme.primary};
                     } */
              }
              .address {
                font-size: 15px;
              }
            }
          }
        }
      }
      .responsive-footer {
        display: none;
        @media (max-width: 992px) {
          display: block;
        }
        .nav-tabs {
          margin-bottom: 1rem;

          .nav-link {
            border: none;
            color: #212121;
            border-radius: 0;
            text-transform: capitalize;
            border-radius: 5px;

            &.active {
              color: ${(props) => props.theme.primary};
              background: transparent;
            }
          }

          @media screen and (max-width: 568px) {
            display: flex;
            flex-wrap: nowrap;
            overflow: auto;
            -ms-overflow-style: none;
            scrollbar-width: none;

            &::-webkit-scrollbar {
              display: none;
            }

            .nav-item {
              min-width: fit-content;
            }
          }
        }
      }
    }
    .footer__bottom {
      color: #212121;
      .bottom-list {
        border-top: 1px solid #ccc;

        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        padding: 1rem 0;

        @media (max-width: 568px) {
          gap: 1rem;
          flex-direction: column;
        }

        a {
          padding-left: 5px;
          font-weight: 700;
          color: ${props => props.theme.primary};
        }
        .footer__copyright {
          span {
            font-weight: 700;
          }
        }
      }
    }
  }
`;

export const FooterBody = styled(Container)`
  padding: 0px 0px 0px;

  @media only screen and (max-width: 568px) {
    padding-left: 10px;
    padding-right: 10px;

    .g-5 {
      --bs-gutter-y: 0rem;
      --bs-gutter-x: 0rem;
    }

    .mobile__footer {
      width: 100%;
      flex: auto;
    }
  }
`;

export const FooterItem = styled(Col)`
  border-style: solid;
  border-width: 0px 0px 0px 1px;
  border-color: #cccccc;
  transition:
    background 0.3s,
    border 0.3s,
    border-radius 0.3s,
    box-shadow 0.3s;
  padding: 55px 15px 50px 0px;
  &.contact {
    border-style: solid;
    border-width: 0px 0px 0px 1px;
    border-color: #cccccc;
    transition:
      background 0.3s,
      border 0.3s,
      border-radius 0.3s,
      box-shadow 0.3s;
    padding: 55px 15px 50px 0px;
  }
  a {
    color: ${(props) => props.theme.primary};
    i {
      font-size: 25px;
    }
    svg {
      width: 20px;
      height: 19px;
    }
  }
  @media screen and (max-width: 900px) {
    border-width: 0px 0px 0px 0px;
    &.contact {
      border-width: 0px 0px 0px 0px;
    }
    &:first-child {
      order: 2;
      padding-top: 10px;
      padding-bottom: 10px;
      ul {
        display: flex;
        gap: 30px;
        overflow-x: scroll;
        width: calc(100% + 0px);
        a {
          text-align: center;
          white-space: nowrap;
        }
      }
    }
    &:last-child {
      order: 3;
    }
    &:nth-child(2) {
      order: 1;
    }
  }
`;

export const FooterHeading = styled.div`
  margin-bottom: 1rem;

  h3,
  h4 {
    color: ${(props) => props.theme.primary};
    font-size: 20px;

    img {
      width: 150px;
    }
  }
`;

export const FooterContent = styled.div`
  margin-bottom: ${(props) => props.marginBottom && "1.5rem"};
  p {
    color: #555;
    text-align: justify;
    font-size: 14px;
    font-family: "Nunito Sans", sans-serif;
  }

  a {
    color: #212121;
    transition: all 0.3s ease-in;

    &:hover {
      color: ${(props) => props.theme.secondary};
    }
  }

  ul {
    padding: 0;

    li {
      list-style-type: none;
      ${"" /* margin-bottom: 10px; */}

      a {
        color: #000;
        font-family: "Rajdhani", sans-serif;
        transition: all 0.3s ease-in;
        line-height: 60px;
        letter-spacing: 0.04em;
        text-transform: uppercase;

        &:hover {
          color: ${(props) => props.theme.secondary};
          margin-left: 10px;
        }
      }
    }
  }
`;

export const FooterContact = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding: 0px 52px;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  h4 {
    font-size: 18px;
    font-weight: 500;
  }
  span {
    color: #555;
  }

  &:last-child {
    border-bottom: none;
  }
  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 0,
      "wght" 200,
      "GRAD" 0,
      "opsz" 24;
  }
  border-bottom: 1px solid #cccccc;
  span {
    &:first-child {
      color: ${(props) => props.theme.primary};
    }

    color: #555;
  }
  a {
    color: #555;
  }
`;

export const FooterCredential = styled.div`
  background: ${(props) => props.theme.primary};
  font-size: 14px;
  font-family: "Rajdhani", sans-serif;

  @media only screen and (max-width: 568px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const FooterCredentialContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  ${"" /* border-top: 1px solid #4c4c4c; */}
  color: ${(props) => props.theme.white};

  a,
  span {
    color: ${(props) => props.theme.secondary};
    color: #fff;
  }

  @media only screen and (max-width: 568px) {
    flex-direction: column;
    justify-content: left;
    align-items: start;
  }
`;
