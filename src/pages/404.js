import * as React from "react"
import Layout from '../components/layout'
import { Typography } from "@mui/material";

// markup
export default function ErrorPage () {
  return (
    <Layout>
      <Typography style={{paddingLeft:"20px"}}>This page does not exist.</Typography>
    </Layout>
  );
}
