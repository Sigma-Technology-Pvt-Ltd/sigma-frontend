import styled from "styled-components";

export const BlogDetailContent = styled.div`
      @media screen and (max-width: 568px) {
            h1 {
                  display: none;
            }

            .justify-content-center {
                  justify-content: left !important;
            }
      }
`;

export const BlogDetail = styled.div``;
export const BlogHeading = styled.div`
      display: flex;
      flex-direction: column;
`;

export const BlogHeadingCategory = styled.div`
      margin-bottom: 1rem;

      h1 {
            font-size: 28px;
      }

      a {
            margin-right: 4px;
            padding: 8px 28px;
            font-weight: 400 !important;
            background: #5e6fb5;
            color: #fff;
            width: 100px;
            align-items: center;
            text-align: center;
            font-size: 14px;
            text-align: center;
            border-radius: 5px;
            display: inline-block;
      }
`;
export const BlogHeadingMeta = styled.div`
      display: flex;
      margin-bottom: 30px;
      margin-top: 15px;
      align-items: center;
      gap: 1.5rem;

      a {
            text-decoration: none;
            color: #999;
            font-size: 13px;
            span {
                  color: #767676;
            }
      }
`;

export const BlogHeadingInner = styled.div``;

export const BlogDetailImage = styled.div`
      margin-bottom: 10px;

      img {
            border-radius: 15px;
      }
`;
export const BlogDetailDesc = styled.div`
      background: #ebf2fa;
      padding: 30px;
      border-radius: 15px 15px;
      margin-bottom: 3rem;
      margin-top: 50px;

      ${BlogHeadingCategory} {
            display: none;
      }

      @media screen and (max-width: 568px) {
            padding: 20px;

            ${BlogHeadingCategory} {
                  display: block;
                  margin-bottom: 0;

                  h1 {
                        font-size: 20px;
                        margin-top: 10px;
                  }
            }
      }
`;

export const BlogDetailDescription = styled.div``;

export const BlogSearch = styled.div`
      padding-top: 60px;
      padding-bottom: 30px;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;

      form {
            width: 100%;
            max-width: 450px;
            display: flex;
            align-items: center;
            border: none;
            padding: 5px 15px;
            background: #ebf2fa;
            border-radius: 10px;
      }
      input {
            flex: 1;
            border: 0;
            outline: none;
            ${"" /* padding: 10px 20px; */}
            font-size: 16px;
            color: #677289;
            background: #ebf2fa;
            &:focus {
                  box-shadow: none;
                  background: transparent;
            }
      }
      button {
            border: none;
            background: transparent;
            color: ${(props) => props.theme.primary};
      }

      @media screen and (max-width: 568px) {
            padding-top: 0px;
            padding-bottom: 0px;
      }
`;
export const BlogCategory = styled.div`
      margin-bottom: 30px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
      border-radius: 10px;
      padding: 22px;
      position: relative;
      display: block;
      padding-bottom: 5px;
      padding-top: 10px;
      h2 {
            color: #212529;
            line-height: 1.2;
            margin: 0 0 0.5em;
            padding: 1.5rem 0 0;
            font-size: 20px;
            font-weight: 600;
            font-family: ${(props) => props.theme.primaryFont};
      }
      span {
            color: #5e6fb5c4;
            margin-right: 10px;
      }
      .material-symbols-outlined {
            font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
      }
`;
export const BlogCategoryList = styled.ul``;
export const BlogCategoryItem = styled.li`
      ${"" /* margin-left: 10px; */}
      position: relative;
      padding: 0.72rem 0;
      color: #444040;
      border-bottom: 1px solid #e8ecef;

      a {
            color: #322c2c;
      }
      &:last-child {
            border-bottom: none;
      }
      &:hover {
            color: #5e6fb5;
            transition: 0.5s ease all;
            cursor: pointer;
      }
`;
export const BlogRecentItem = styled.div``;
export const BlogRecentImage = styled.div`
      img {
            border-radius: 10px;
            margin-right: 10px;
      }
`;
export const BlogRecentInfo = styled.div`
      span {
            color: #666;
            font-size: 14px;
      }
      a {
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-decoration: none;
            display: -webkit-box !important;
            overflow: hidden;
            ${"" /* text-align: justify; */}
            &:hover {
                  color: ${(props) => props.theme.primary};
            }
      }
`;
export const BlogDetailSection = styled.div`
      .background-image {
            background-color: rgba(0, 0, 0, 0.67);
            background-repeat: no-repeat;
            background-position: center;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
      }

      .header .title h3 {
            font-size: 40px;
            color: #fff;
            font-family: "Montserrat", sans-serif;
            align-items: center;
            text-align: center;
            font-weight: 500;
      }

      .header a {
            color: #abb8c3;
            font-size: 1rem;
            line-height: 1.5;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
                  "Lucida Sans", Arial, sans-serif;
      }
      .header span {
            color: #fff;
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
                  "Lucida Sans", Arial, sans-serif;
      }
      .header .links {
            margin-top: 1.5rem;
            text-align: center;
      }
      .entry-header {
            display: flex;
            flex-direction: column;
            padding-top: 50px;
      }
      .cat-links {
            margin-top: 5px;
            margin-bottom: 1rem;
            display: inline-flex;
            flex-wrap: wrap;
            height: 30px;
            overflow: hidden;
            padding: 1px;
      }

      .cat-links a {
            margin-right: 4px;
            padding: 2.5px;
            font-weight: 400 !important;
            background: #5e6fb5;
            color: #fff;
            width: 100px;
            align-items: center;
            text-align: center;
            font-size: 13px;
            text-align: center;
            border-radius: 5px;
            text-decoration: none;
      }
      .entry-meta {
            margin-bottom: 40px;
      }
      .entry-meta .meta-inner > span {
            padding: 0 5px;
            font-size: 12px;
            font-weight: 700;
      }
      .entry-meta .meta-inner i {
            margin-right: 5px;
      }
      .entry-meta .author {
            margin-left: 5px;
      }
      .entry-meta span a {
            text-decoration: none;
            color: #999;
            font-size: 12px;
      }
      .entry-meta span a:hover {
            color: #5e6fb5;
      }
      .entry-header .cat-links a:hover {
            background: #43528e;
      }

      .byline:not(:first-child) {
            color: #999;
      }

      .byline i {
            font-size: 12px;
            color: #999;
            text-decoration: none;
      }
      .author .a {
            color: #5e6fb5;
      }
      .post-thumbnail {
            margin-bottom: 1.5rem;
            width: 800px;
      }
      .post-thumbnail img {
            border-radius: 15px;

            width: 100%;
      }
      .col-lg-8 .post-content p {
            padding: 0;
            font-family: "Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI",
                  Roboto, "Helvetica Neue", Arial, sans-serif;
            font-weight: 400;
      }
      .site_content {
            margin-left: 1.8rem;
      }
      .blockquote {
            display: flex;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
            overflow: hidden;
            position: relative;
            padding: 40px;
            padding-left: 70px;
            line-height: 1.5;
            margin-top: 50px;
            margin-bottom: 50px;
      }
      .col-lg-8 .post-content .blockquote .special-paragraph {
            font-size: 20px;
            color: #212529;
            font-family: "Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI",
                  Roboto, "Helvetica Neue", Arial, sans-serif;
            background: #fff;
            align-items: center;
            justify-content: center;
      }
      .blockquote i {
            color: #5e6fb5;
            font-size: 65px;
            display: flex;
            padding-bottom: 40px;
            padding-right: 20px;
      }
      .blockquote cite {
            color: #677289;
            font-weight: 600;
            margin-top: 1rem;
            font-size: 11px;
            font-style: normal;
            text-transform: uppercase;
            display: flex;
            align-items: center;
      }

      .blockquote cite::before {
            content: "";
            width: 32px;
            height: 0;
            margin-right: 10px;
            border-bottom: 2px solid #e8ecef;
      }
      .col-lg-8 h4 {
            color: #212529;
            line-height: 1.2;
            margin: 0 0 0.5em;
            padding: 1.5rem 0 0;
            font-size: 1.5rem;
      }

      /*search bar */

      #search {
            padding-top: 60px;
            padding-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
      }
      .search__wrap {
            width: 100%;
      }
      .search-bar {
            width: 100%;
            max-width: 450px;
            display: flex;
            align-items: center;
            border: none;
            padding: 10px 15px;
            background: #f0f0f0;
            border-radius: 10px;
      }
      .search-bar input {
            flex: 1;
            border: 0;
            outline: none;
            padding: 10px 20px;
            font-size: 16px;
            color: #677289;
            background: #f0f0f0;
      }
      .search-bar button {
            border: none;
      }
      #categories {
            margin-bottom: 30px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
            border-radius: 10px;
            padding: 30px;
            position: relative;
            display: block;
            padding-bottom: 5px;
            padding-top: 10px;
      }
      #categories .title {
            color: #212529;
            line-height: 1.2;
            margin: 0 0 0.5em;
            padding: 1.5rem 0 0;
            font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
                  sans-serif;
            font-size: 22px;
      }
      #categories .fa-regular {
            color: #5e6fb5;
            margin-right: 10px;
      }
      #categories li {
            margin-left: 10px;
            position: relative;
            padding: 0.72rem 0;
            color: #212529;
            border-bottom: 1px solid #e8ecef;
            font-weight: 600;
      }
      #categories li:last-child {
            border-bottom: none;
      }
      #categories li:hover {
            color: #5e6fb5;
            transition: 0.5s ease all;
            cursor: pointer;
      }

      #recent-posts {
            margin-bottom: 30px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
            border-radius: 10px;
            padding: 30px;
            position: relative;
            display: block;
            padding-top: 10px;
            padding-bottom: 10px;
      }
      #recent-posts .title {
            color: #212529;
            line-height: 1.2;
            margin: 0 0 0.5em;
            padding: 1.5rem 0 0;
            font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
                  sans-serif;
            font-size: 22px;
      }
      #recent-posts li {
            margin-left: 10px;
            position: relative;
            padding: 0.72rem 0;
            color: #999;
            border-bottom: 1px solid #e8ecef;
            display: flex;
      }
      #recent-posts li a {
            text-decoration: none;
            font-size: 15px;
            color: #212529;
            font-weight: 550;
      }
      #recent-posts li a:hover {
            color: #5e6fb5;
            transition: 0.5s ease all;
      }
      #recent-posts li img {
            border-radius: 10px;
            margin-right: 10px;
      }
      #recent-posts .post-date {
            display: inline;
      }
      #recent-posts li:last-child {
            border-bottom: none;
      }
      #recent-posts .post-date {
            font-size: 13px;
            color: #999;
      }
      #tags {
            margin-bottom: 30px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
            border-radius: 10px;
            padding: 30px;
            position: relative;
            display: block;
            padding-top: 10px;
      }
      #tags .title {
            color: #212529;
            line-height: 1.2;
            margin: 0 0 0.5em;
            padding: 1.5rem 0 0;
            font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
                  sans-serif;
            font-size: 22px;
            font-weight: 300;
      }
      #tags .tagcloud a {
            border-style: solid;
            border: 1px solid #e8ecef;
            text-decoration: none;
            color: #677289;
            border-radius: 3px;
            font-size: 12pt;

            padding: 1.2px;
      }
      #tags .tagcloud a:hover {
            background: #5e6fb5;
            color: #fff;
            transition: 0.5s ease all;
      }
      .entry-footer {
            border-top: 1px solid #e8ecef;
            margin-top: 50px;
            font-size: 0.875rem;
            padding-top: 30px;
      }
      .cat-tag-links {
            display: flex;
            justify-content: space-between;
      }
      .tag-links a {
            border: 1px solid #e8ecef;
            text-decoration: none;
            margin: 10px;

            color: #677289;
            font-size: 13px;
            border-radius: 5px;
      }
      .tag-links a:hover {
            background: #43528e;
            color: #fff;
            border: none;
            transition: 0.5s ease all;
      }
      .social-share .social-share-header a {
            margin: 8px;
            color: #212529;
      }
      .social-share .social-share-header a:hover {
            color: #5e6fb5;
            transition: 0.5s ease all;
      }

      .post-navigation {
            display: flex;
            position: relative;
            font-size: 1.125rem;
            margin-top: 50px;
      }
      .post-navigation .previous-nav {
            justify-content: flex-start;
            margin-right: auto;
      }
      .post-navigation > div {
            padding: 2.25rem 1.75rem;
      }
      .post-navigation > div {
            flex-basis: calc(50% - 15px);
            width: calc(50% - 15px);
            display: -ms-flexbox;
            display: flex;
            position: relative;
            overflow: hidden;
            padding: 30px;
            background-color: #fff;
            border-radius: 10px;
            margin-bottom: 30px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
            padding: 1.75rem;
            -ms-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
      }
      .prev-nav:hover {
            background: #5e6fb5;
            color: #fff;
            transition: all 0.3s ease;
      }
      .prev-nav:hover a {
            color: #fff;
            transition: all 0.3s ease;
      }
      .prev-nav:hover .nav-title {
            color: #fff;
            transition: all 0.3s ease;
      }
      .prev-nav:hover .fa-solid {
            color: #fff;
      }
      .nav-link .nav-title {
            font-size: 13px;
            font-weight: 700;
            color: #5e6fb5;
      }
      .nav-link a {
            color: #212529;
            text-decoration: none;
            font-size: 18px;
      }
      .post-navigation .prev-nav .nav-content {
            display: flex;
      }
      .post-navigation .prev-nav .nav-content i {
            margin-right: 15px;
            margin-top: 26px;
            color: #999;
            font-size: 18px;
      }

      /*-----comment area-----*/
      .comment-area .comment-list-wrap h2 {
            font-size: 24px;
            margin-top: 30px;
            margin-left: 2rem;
      }
      article {
            margin-top: 30px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
            padding: 1.75rem;
            border-radius: 10px;
            display: flex;
      }
      .comment-list-wrap h2 {
            font-size: 18px;
            margin-bottom: 10px;
      }
      .comment-meta .comment-author img {
            border-radius: 50%;
      }
      .comment-meta {
            display: flex;
            align-items: center;
            justify-content: center;
      }
      .comment-meta img {
            margin-bottom: 32px;
      }
      .comment-wrapper {
            display: block;
            margin-left: 25px;
            margin-bottom: 10px;
      }
      .comment-wrapper .comment-metadata h2 {
            font-size: 16px;
            font-weight: 400;
            align-items: left;
            margin-bottom: 0;
            margin-left: 20px;
      }
      .comment-metadata a {
            text-decoration: none;
      }
      time {
            font-size: 12px;
            text-decoration: none;
            color: #999;
            margin-top: 0;
      }
      .comment-wrapper .comment-metadata time:hover {
            color: #5e6fb5;
      }
      article .comment-content p {
            font-size: 14px;
      }
      article .reply a {
            font-size: 13px;
            font-weight: 650;
            border-bottom: 1px solid #212529;
      }
      article .reply a:hover {
            color: #5e6fb5;
            cursor: pointer;
            transition: 0.5s ease all;
      }

      /*   leave a message    */

      .contactUs {
            overflow: hidden;
            position: relative;
            width: 100%;
            padding: 40px 100px;
            display: flex;
      }
      .contactUs .title {
            display: flex;
            justify-content: center;
            align-items: center;
      }
      .contactUs .title .h3 {
            color: #000;
            display: flex;
            font-family: Impact, Haettenschweiler, "Arial Narrow Bold",
                  sans-serif;
            font-size: 22px;
            font-weight: 300;
      }
      .form {
            grid-area: form;
      }
      .info {
            grid-area: info;
      }
      .map {
            grid-area: map;
      }
      .contact {
            padding: 40px;
            background: #fff;
      }
      .box {
            position: relative;
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-areas:
                  "form info"
                  "form map";
            grid-gap: 20px;
            margin-top: 20px;
      }
      .comment-notes {
            font-size: 0.875rem;
            color: #999;
            margin-top: 5px;
      }
      .required {
            color: #fe2d2d;
      }
      .cookies-consent {
            color: #212529;
            font-size: 0.875rem;
      }
      .contact-form h3 {
            color: black;
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
                  "Lucida Sans", Arial, sans-serif;
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 40px;
      }
      /* form */
      .formBox {
            position: relative;
            width: 100%;
      }
      .formBox .row50 {
            display: flex;
            gap: 20px;
      }
      .inputBox {
            display: flex;
            margin-bottom: 13px;
            flex-direction: column;
            width: 50%;
            color: #000;
      }
      .formBox .row100 .inputBox {
            width: 100%;
      }
      .inputBox span {
            color: black;
            margin-top: 10px;
            margin-bottom: 5px;
            font-weight: 500;
      }
      .inputBox input,
      textarea {
            padding: 8px;
            font-size: 13px;
            outline: none;
            border: 2px solid rgba(241, 238, 246, 0.5);
            background-color: #fff;
      }
      .inputBox input:hover {
            border: 1px solid #5e6fb5;
      }
      .inputBox input[type="input"]:hover {
            border: 1px solid #5e6fb5;
      }
      .inputBox input[type="submit"] {
            background: #5e6fb5;
            color: #fff;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            padding: 17px 14px;
            width: 70%;
            border-radius: 0;
            outline: none;
            border: none;
      }
      .inputBox::placeholder {
            color: #000;
            border: #7377ab;
      }
      .inputBox input[type="submit"]:hover {
            background: #43528e;
            color: #fff;
            transition: 0.5s ease all;
      }
`;
