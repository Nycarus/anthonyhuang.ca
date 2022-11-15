import * as React from "react"
import { Typography } from "@mui/material";
import Layout from "../components/layout";

// markup
export default function ErrorPage () {
  return (
    <Layout>
      <Typography style={{paddingLeft:"20px"}}>This page does not exist.</Typography>
    </Layout>
  );
}
