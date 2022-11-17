import * as React from "react"
import { Typography } from "@mui/material";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ErrorPage = () => (
  <Layout>
    <Typography style={{paddingLeft:"20px"}}>This page does not exist.</Typography>
  </Layout>
);

export const Head = () => (
  <Seo title="404: Page Not Found"/>
);

export default ErrorPage;