// @mui
import { Container, Box } from '@mui/material';
// layouts
import Layout from '../../layouts';
// components
import Title from '../../components/Title';
import ComponentPage from '../../components/Page';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

Report.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Report() {
  return (
    <ComponentPage title="Report">
      <Container maxWidth="lg">
        <Title heading="Analysis Setting" />
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <iframe width="800" height="800" src="/report.PDF#toolbar=0&navpanes=0&scrollbar=0" frameBorder="0"></iframe>
        </Box>
      </Container>
    </ComponentPage>
  );
}
