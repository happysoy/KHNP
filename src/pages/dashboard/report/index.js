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
        <Box height="100vh" display="flex" justifyContent="center">
          <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
            <ReportPDF />
          </PDFViewer>
          {/* <iframe width="600" height="1000" src="/page1.html#toolbar=1" frameBorder="0" /> */}
        </Box>
      </Container>
    </ComponentPage>
  );
}
