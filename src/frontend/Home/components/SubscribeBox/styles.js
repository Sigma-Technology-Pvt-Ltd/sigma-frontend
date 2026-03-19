import styled from "styled-components";

export const SubscribeContainer = styled.div`
      display: flex;
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 0;
      margin-bottom: 50px;
      border-radius: 5px;
      background: linear-gradient(
            328deg,
            rgba(14, 76, 150, 1) 25%,
            rgb(2 142 253) 69%
      );
      clip-path: polygon(
            45px 0,
            100% 0,
            100% calc(100% - 45px),
            calc(100% - 45px) 100%,
            0 100%,
            0 45px
      );

      @media (max-width: 568px) {
            padding: 3rem 0;
      }

      .footer__top {
            @media (max-width: 992px) {
                  margin-left: 20px;
            }

            .row {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  .footer__top--title {
                        font-size: 28px;
                        text-align: center;
                        @media (max-width: 992px) {
                              padding-bottom: 1rem;
                              text-align: start;
                        }
                        @media (max-width: 568px) {
                              font-size: 24px;
                        }
                  }

                  .form {
                        .form__group {
                              display: flex;
                              align-items: center;

                              input {
                                    width: 60%;
                                    height: 42px;
                                    padding: 1rem 1rem 1rem 0;
                                    font-size: 15px;
                                    margin-right: 1rem;
                                    background-color: transparent;
                                    border: 0;
                                    outline: 0;
                                    border-bottom: 1px solid #ffffff;
                                    color: #ffffff;

                                    &::placeholder {
                                          color: #fff;
                                    }
                                    &:focusvisible {
                                          border: 0;
                                          outline: 0;
                                    }
                              }
                        }

                        @media screen and (max-width: 568px) {
                              .form__group {
                                    flex-direction: column;
                                    align-items: normal;

                                    input {
                                          width: calc(100% - 20px);
                                          margin-bottom: 20px;
                                    }
                              }
                        }
                  }
            }
      }
`;
