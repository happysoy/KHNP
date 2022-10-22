import { Page, View, Text, Image, Document } from '@react-pdf/renderer';
import styles from './ReportStyle';

import Html from 'react-pdf-html';
import Page__frist_logo from './Svg';
// ----------------------------------------------------------------------

export default function ReportPDF() {
  return (
    <Document>
      <Page style={styles.root}>
        <View style={styles.html}>
          <View style={styles.page}>
            <View style={styles.page__first_top} />
            <View style={styles.page__frist_logo}>
              <Page__frist_logo />
              <Text style={styles.page__first_logo_cop}>(주)딥아이</Text>
            </View>
            {/* <View style={styles.page__first_img}></View> */}
            <View style={styles.page__first_credit}>
              <View style={styles.page__first_credit_frame}>
                <View style={styles.page__first_credit_item}>
                  <Text style={styles.page__first_credit_type}>고객사</Text>
                  <Text style={styles.page__first_credit_value}>(주)딥아이</Text>
                </View>
              </View>

              <View style={styles.page__first_credit_frame}>
                <View style={styles.page__first_credit_item}>
                  <Text style={styles.page__first_credit_type}>고객사</Text>
                  <Text style={styles.page__first_credit_value}>(주)딥아이</Text>
                </View>
              </View>
            </View>
            <View style={styles.page__first_btm} />
          </View>
        </View>
      </Page>
    </Document>
  );
}
