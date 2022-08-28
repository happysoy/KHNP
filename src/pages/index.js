// layouts
import Layout from "../layouts";
// components
import Page from "../components/Page";

Home.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

export default function Home() {
  return (
    <Page title="home">
      <div>
        <h1>/pages/index.js</h1>
      </div>
    </Page>
  );
}
