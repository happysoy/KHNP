// @mui
import { Container, Box } from '@mui/material';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// layouts
import Layout from '../../../layouts';
// components
import Title from '../../../components/Title';
import ComponentPage from '../../../components/Page';
import ReportPDF from 'src/sections/dashboard/report/ReportPDF';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

Report.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Report() {
  return (
    <ComponentPage title="Report">
      <Container maxWidth="lg">
        <Title heading="Report" />
        <Box height="100vh">
          <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
            <ReportPDF />
          </PDFViewer>
          {/* <iframe width="800" height="800" src="/report.PDF#toolbar=0&navpanes=0&scrollbar=0" frameBorder="0"></iframe> */}
        </Box>
      </Container>
    </ComponentPage>
  );
}
