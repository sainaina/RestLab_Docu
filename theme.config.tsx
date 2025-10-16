import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "RestLab | Documentation",
      description: "Official documentation for RestLab ",
    };
  },
  head: (
    <>
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#081910" />
    </>
  ),
  logo: (
    <img
      style={{ width: "80px" }}
      src="https://cdn.builder.io/api/v1/image/assets%2F66fa4205ed5a4558a776cf72c5db088b%2F19a91240c07c4229bbfff8458cc79a75"
      alt="RestLab Logo"
    />
  ),
  project: {
    link: "https://github.com/sainaina/RestLab_Docu.git",
  },
  docsRepositoryBase: "https://github.com/sainaina/RestLab_Docu.git",
};

export default config;
