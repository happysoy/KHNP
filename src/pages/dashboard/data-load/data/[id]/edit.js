// next
import { useRouter } from "next/router";
// @ mui
import { Container } from "@mui/material";
// components
import Title from "../../../../../components/Title";
// sections
import DataNewEditForm from "../../../../../sections/dashboard/data-load/DataNewEditForm";
// redux
import { useDispatch, useSelector } from "../../../../../redux/store";
//
import Page from "../../../../../components/Page";
import Layout from "../../../../../layouts";
// redux
import { getDatas } from "../../../../../redux/slices/data";
import { useEffect } from "react";

DataLoadEdit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function DataLoadEdit() {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { id } = query;
  const { datas } = useSelector((state) => state.data);
  const currentData = datas.find((data) => data.id === parseInt(id));

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  return (
    <Page title="Edit">
      <Container>
        <Title heading="DATA Edit" desc="데이터를 수정하세요" />
        <DataNewEditForm isEdit currentData={currentData} />
      </Container>
    </Page>
  );
}
