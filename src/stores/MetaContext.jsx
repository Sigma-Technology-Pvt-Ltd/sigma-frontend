import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const MetaContext = createContext({
      meta: [],
      handleSlug: (slug, e) => {},
});

export const MetaContextProvider = (props) => {
      const [loading, setLoading] = useState(false);
      const [meta, setMeta] = useState([]);
      const [slug, setSlug] = useState("");

      const handleSlug = (slug) => {
            setSlug(slug);
      };

      const loadData = async () => {
            setLoading(true);
            if (slug) {
                  await axios
                        .get(
                              `${process.env.REACT_APP_SECRET_KEY}/api/pages/${slug}`,
                              {
                                    headers: {
                                          apikey: process.env.REACT_APP_API_KEY,
                                    },
                              }
                        )
                        .then((response) => {
                              if (response.data.result === "success") {
                                    setMeta(response.data.page);
                              }
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  setLoading(false);
            }
      };

      useEffect(() => {
            loadData();
      }, [useLocation.location, slug]);

      const context = {
            handleSlug: handleSlug,
            meta: meta,
      };

      const MetaData = () => {
            return (
                  <>
                        {meta.slug === slug ? (
                              <Helmet>
                                    <title>
                                          {meta.seo_title || meta.title}
                                    </title>
                                    {meta.seo_description && (
                                          <meta
                                                name="description"
                                                content={meta.seo_description}
                                          />
                                    )}
                                    {meta.seo_keyword && (
                                          <meta
                                                name="keyword"
                                                content={meta.seo_keyword}
                                          />
                                    )}
                                    <link
                                          rel="canonical"
                                          href={window.location.href}
                                    />
                                    <meta
                                          property="og:locale"
                                          content="en_US"
                                    />
                                    <meta
                                          property="og:type"
                                          content="website"
                                    />
                                    <meta
                                          property="og:title"
                                          content={meta.seo_title || meta.title}
                                    />
                                    <meta
                                          property="og:url"
                                          content={window.location.href}
                                    />
                                    {meta.seo_description && (
                                          <meta
                                                property="og:description"
                                                content={meta.seo_description}
                                          />
                                    )}
                                    <meta
                                          property="og:site_name"
                                          content="Sigma Technologies"
                                    />
                                    <meta
                                          property="article:modified_time"
                                          content={meta.updated_at}
                                    />
                                    <meta
                                          name="twitter:card"
                                          content="summary_large_image"
                                    />
                              </Helmet>
                        ) : null}
                  </>
            );
      };

      return (
            <>
                  <MetaContext.Provider value={context}>
                        <MetaData />
                        {props.children}
                  </MetaContext.Provider>
            </>
      );
};

export default MetaContext;
