import { forwardRef } from "react";
import PropTypes from "prop-types";
// next
import Head from "next/head";
// @mui
import { Box } from "@mui/material";

const Page = forwardRef(({ title = "", meta, children, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title}` | "DEEP-AI"}</title>
      {meta}
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
