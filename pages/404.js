import React from "react";
import Layout from "../components/Layout";
import { Result, Button } from "antd";

const Custom404 = () => {
  return (
    <Layout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </Layout>
  );
};

export default Custom404;
