import React, { useEffect, useState } from "react";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import {
      ProductDetailContainer,
      DetailAccordion,
      ProductBrandImage,
      ProductEnquiryButton,
      ProductDescription,
      ProductDetails,
} from "./styles";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Magnifier from "react-magnifier";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
      ProductEnquiry,
      ShareBox,
} from "../../components/frontend/product_details";
import { Helmet } from "react-helmet";
import ProductImages from "./ProductImages";
import { ProductStatusItem } from "../../components/frontend/product/ProductItem/styles";

const ProductDetail = () => {
      const [show, setShow] = useState(false);
      const [showEnquiry, setShowEnquiry] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const { productId } = useParams();

      const [loading, setLoading] = useState(false);
      const [product, setProduct] = useState([]);
      const [shops, setShops] = useState([]);
      const [products, setProducts] = useState([]);

      const loadData = async () => {
            setLoading(true);

            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/products/${productId}/show`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setProduct(response.data.product);
                              setProducts(response.data.products);
                              setShops(response.data.shops);
                        }
                  })
                  .catch((error) => {
                        toast.error(error.message);
                  });

            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, [productId]);

      const handleDownload = async (productId) => {
            try {
                  const response = await axios.get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/download-image/${productId}`, // Adjust as needed
                        {
                              responseType: "blob",
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  );

                  const contentType = response.headers["content-type"];

                  // Determine file extension based on content type
                  let extension = "";
                  if (contentType === "application/pdf") {
                        extension = "pdf";
                  } else if (contentType.startsWith("image/")) {
                        extension = contentType.split("/")[1]; // e.g., image/jpeg -> jpeg
                  } else {
                        console.error("Unsupported file type:", contentType);
                        return;
                  }

                  const blob = new Blob([response.data], { type: contentType });
                  const url = window.URL.createObjectURL(blob);

                  const link = document.createElement("a");
                  link.href = url;
                  link.download = `${productId}.${extension}`;
                  link.style.display = "none";

                  document.body.appendChild(link);
                  link.click();

                  document.body.removeChild(link);
                  window.URL.revokeObjectURL(url);
            } catch (error) {
                  console.error("Download failed:", error);
            }
      };

      return (
            <>
                  {!loading && (
                        <Helmet>
                              <title>
                                    {product?.seo_title || product?.title}
                              </title>
                              <link
                                    rel="canonical"
                                    href={window.location.href}
                              />
                              {product.seo_description && (
                                    <meta
                                          name="description"
                                          content={product.seo_description}
                                    />
                              )}
                              {product.seo_keyword && (
                                    <meta
                                          name="keyword"
                                          content={product.seo_keyword}
                                    />
                              )}
                              <meta property="og:locale" content="en_US" />
                              <meta property="og:type" content="website" />
                              <meta
                                    property="og:title"
                                    content={
                                          product?.seo_title || product?.title
                                    }
                              />
                              <meta
                                    property="og:url"
                                    content={window.location.href}
                              />
                              {product?.seo_description && (
                                    <meta
                                          property="og:description"
                                          content={product?.seo_description}
                                    />
                              )}
                              <meta
                                    property="og:site_name"
                                    content="Sigma Technologies"
                              />
                              <meta
                                    name="twitter:card"
                                    content="summary_large_image"
                              />
                        </Helmet>
                  )}
                  <BreadCrumBox title={product?.title} />
                  <ProductDetailContainer>
                        <Container className="pt-5">
                              <Row>
                                    <Col lg={5}>
                                          <ProductImages
                                                image={product?.image}
                                                images={product?.images}
                                          />
                                    </Col>
                                    <Col lg={7}>
                                          <div className="bg-white px-4 py-3 h-100">
                                                <div className="product_content">
                                                      <div className="product_content-title">
                                                            <h1>
                                                                  {
                                                                        product?.title
                                                                  }
                                                            </h1>
                                                            {product?.brand_image && (
                                                                  <ProductBrandImage>
                                                                        <a
                                                                              href={
                                                                                    product?.brand_link
                                                                              }
                                                                              target={`${
                                                                                    product?.brand_link &&
                                                                                    "_blank"
                                                                              } `}
                                                                        >
                                                                              <img
                                                                                    src={
                                                                                          product?.brand_image
                                                                                    }
                                                                                    width="100%"
                                                                                    height="100%"
                                                                                    alt={
                                                                                          product?.brand_title
                                                                                    }
                                                                                    rel="nofollow noreferrer"
                                                                              />{" "}
                                                                        </a>
                                                                  </ProductBrandImage>
                                                            )}
                                                      </div>
                                                      <div className="product_content-price align-items-center d-flex">
                                                            {product.sale_price ? (
                                                                  <>
                                                                        <del>
                                                                              Rs:{" "}
                                                                              {
                                                                                    product?.price
                                                                              }
                                                                        </del>{" "}
                                                                        <span>
                                                                              Rs:{" "}
                                                                              {
                                                                                    product?.sale_price
                                                                              }
                                                                        </span>
                                                                  </>
                                                            ) : product?.price ? (
                                                                  <>
                                                                        <span>
                                                                              Rs:{" "}
                                                                              {
                                                                                    product?.price
                                                                              }
                                                                        </span>
                                                                  </>
                                                            ) : null}
                                                            {product?.order_status ? (
                                                                  <ProductStatusItem className="d-inline-block ms-3">
                                                                        SOLD OUT
                                                                  </ProductStatusItem>
                                                            ) : null}
                                                      </div>
                                                      <hr />
                                                </div>
                                                <div className="product_short-desc"></div>

                                                <div className="my-4">
                                                      <ProductDescription>
                                                            <span>
                                                                  <span className="category__title">
                                                                        Category:
                                                                  </span>{" "}
                                                                  {
                                                                        product?.category
                                                                  }
                                                            </span>
                                                            <br />
                                                            {/* <span className="category">
                                                                  <span className="category__title">
                                                                        Model
                                                                        No.
                                                                  </span>{" "}
                                                                  : 39000
                                                            </span> */}
                                                            {product?.summary && (
                                                                  <p>
                                                                        {
                                                                              product?.summary
                                                                        }
                                                                  </p>
                                                            )}
                                                      </ProductDescription>

                                                      <div className="product_action my-4 d-flex">
                                                            <div className="product_enquire">
                                                                  <ProductEnquiryButton
                                                                        type="button"
                                                                        onClick={() =>
                                                                              setShowEnquiry(
                                                                                    true
                                                                              )
                                                                        }
                                                                  >
                                                                        <span>
                                                                              Enquire
                                                                              Now
                                                                        </span>
                                                                  </ProductEnquiryButton>

                                                                  <a
                                                                        className="single-product-share"
                                                                        onClick={
                                                                              handleShow
                                                                        }
                                                                  >
                                                                        <i className="bx bx-share-alt"></i>
                                                                  </a>
                                                            </div>
                                                      </div>
                                                      {(product.daraz_link ||
                                                            product.hardware_pasal_link ||
                                                            product.mero_pasal_link) && (
                                                            <>
                                                                  <hr />
                                                                  <div className="icon">
                                                                        {product.daraz_link && (
                                                                              <div className="one">
                                                                                    <a
                                                                                          href={
                                                                                                product.daraz_link
                                                                                          }
                                                                                    >
                                                                                          <img
                                                                                                src="/daraz.webp"
                                                                                                alt={
                                                                                                      "Sigma Daraz"
                                                                                                }
                                                                                                width="100"
                                                                                                height="100"
                                                                                          />
                                                                                    </a>
                                                                              </div>
                                                                        )}
                                                                        {product.hardware_pasal_link && (
                                                                              <div className="one">
                                                                                    <a
                                                                                          href={
                                                                                                product.hardware_pasal_link
                                                                                          }
                                                                                    >
                                                                                          <img
                                                                                                src="/hardware-pasal.webp"
                                                                                                alt="Sigma Hardware Pasal"
                                                                                                width="100"
                                                                                                height="100"
                                                                                          />
                                                                                    </a>
                                                                              </div>
                                                                        )}
                                                                        {product.mero_pasal_link && (
                                                                              <div className="one">
                                                                                    <a
                                                                                          href={
                                                                                                product.mero_pasal_link
                                                                                          }
                                                                                    >
                                                                                          <img
                                                                                                src="/mero-pasal.webp"
                                                                                                alt="Sigma Mero Pasal Link"
                                                                                                width="100"
                                                                                                height="100"
                                                                                          />
                                                                                    </a>
                                                                              </div>
                                                                        )}
                                                                  </div>
                                                            </>
                                                      )}
                                                </div>
                                          </div>
                                    </Col>
                              </Row>

                              <Row className="py-5">
                                    <Col lg={8}>
                                          <div className="product_additional bg-white h-100 p-3">
                                                <nav>
                                                      <div
                                                            className="nav nav-tabs"
                                                            id="nav-tab"
                                                            role="tablist"
                                                      >
                                                            <button
                                                                  className="nav-link active"
                                                                  id="nav-description-tab"
                                                                  data-bs-toggle="tab"
                                                                  data-bs-target="#nav-description"
                                                                  type="button"
                                                                  role="tab"
                                                                  aria-controls="nav-description"
                                                                  aria-selected="true"
                                                            >
                                                                  Description
                                                            </button>
                                                      </div>
                                                </nav>

                                                <div
                                                      className="tab-content"
                                                      id="nav-tabContent"
                                                >
                                                      <div
                                                            className="tab-pane fade show active"
                                                            id="nav-description"
                                                            role="tabpanel"
                                                            aria-labelledby="nav-description-tab"
                                                            tabindex="0"
                                                      >
                                                            <p
                                                                  style={{
                                                                        marginTop:
                                                                              "20px",
                                                                  }}
                                                                  dangerouslySetInnerHTML={{
                                                                        __html: product?.description,
                                                                  }}
                                                            ></p>
                                                      </div>
                                                </div>
                                          </div>
                                    </Col>
                                    <Col lg={4}>
                                          <DetailAccordion>
                                                <Accordion.Item eventKey="0">
                                                      <Accordion.Header>
                                                            Specification
                                                      </Accordion.Header>
                                                      <Accordion.Body>
                                                            <p
                                                                  dangerouslySetInnerHTML={{
                                                                        __html: product?.installation,
                                                                  }}
                                                            ></p>
                                                      </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                      <Accordion.Header>
                                                            Downloads
                                                      </Accordion.Header>
                                                      <Accordion.Body>
                                                            {product?.downloads?.map(
                                                                  (
                                                                        item,
                                                                        index
                                                                  ) => (
                                                                        <a
                                                                              key={
                                                                                    index
                                                                              }
                                                                              onClick={() =>
                                                                                    handleDownload(
                                                                                          item.slug
                                                                                    )
                                                                              }
                                                                              className="d-block border-bottom pb-2 pt-2"
                                                                        >
                                                                              Download
                                                                              File
                                                                        </a>
                                                                  )
                                                            )}
                                                      </Accordion.Body>
                                                </Accordion.Item>
                                          </DetailAccordion>
                                    </Col>
                              </Row>
                              {products?.length > 0 && (
                                    <Row>
                                          <div className="product_recommend my-5 mt-0">
                                                <Container className=" p-0">
                                                      <div className="product_recommend-title my-3 mb-0">
                                                            <h2
                                                                  className="fs-3"
                                                                  style={{
                                                                        backgroundColor:
                                                                              "#f5f5f588",
                                                                  }}
                                                            >
                                                                  Related
                                                                  Products
                                                            </h2>
                                                      </div>

                                                      <div className="products">
                                                            <Row className="g-4">
                                                                  {products?.map(
                                                                        (
                                                                              item,
                                                                              index
                                                                        ) => (
                                                                              <Col
                                                                                    lg={
                                                                                          3
                                                                                    }
                                                                                    key={
                                                                                          index
                                                                                    }
                                                                              >
                                                                                    <div className="product__wrapper rounded-2">
                                                                                          <div className="product_image">
                                                                                                <Link
                                                                                                      to={`/product/${item.slug}`}
                                                                                                >
                                                                                                      <img
                                                                                                            src={
                                                                                                                  item?.image
                                                                                                            }
                                                                                                            className="img-fluid"
                                                                                                            alt={
                                                                                                                  item?.title
                                                                                                            }
                                                                                                      />
                                                                                                </Link>
                                                                                          </div>
                                                                                          <ProductDetails>
                                                                                                <Link
                                                                                                      to={`/product/${item.slug}`}
                                                                                                >
                                                                                                      <h5>
                                                                                                            {
                                                                                                                  item?.title
                                                                                                            }
                                                                                                      </h5>
                                                                                                </Link>
                                                                                                {item.sale_price ? (
                                                                                                      <p>
                                                                                                            <del>
                                                                                                                  Rs:{" "}
                                                                                                                  {
                                                                                                                        item?.price
                                                                                                                  }
                                                                                                            </del>{" "}
                                                                                                            Rs:{" "}
                                                                                                            {
                                                                                                                  item?.sale_price
                                                                                                            }
                                                                                                      </p>
                                                                                                ) : item.price ? (
                                                                                                      <p>
                                                                                                            {" "}
                                                                                                            Rs:{" "}
                                                                                                            {
                                                                                                                  item?.price
                                                                                                            }
                                                                                                      </p>
                                                                                                ) : (
                                                                                                      ""
                                                                                                )}
                                                                                          </ProductDetails>
                                                                                    </div>
                                                                              </Col>
                                                                        )
                                                                  )}
                                                            </Row>
                                                      </div>
                                                </Container>
                                          </div>
                                    </Row>
                              )}
                        </Container>
                  </ProductDetailContainer>
                  <ProductEnquiry
                        show={showEnquiry}
                        slug={productId}
                        handleClose={() => setShowEnquiry(false)}
                  />
                  <ShareBox show={show} handleClose={handleClose} />
            </>
      );
};

export default ProductDetail;
