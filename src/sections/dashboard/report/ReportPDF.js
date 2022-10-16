import { Page, View, Text, Image, Document } from '@react-pdf/renderer';
import styles from './ReportStyle';

export default function ReportPDF() {
  return (
    <Document>
      <Page size="A4" style={[styles.page, styles.p1_border]}>
        <View style={[styles.gridContainer, styles.mb8]}>
          <Image source="/report/1_logo.png" style={{ height: 60, position: 'relative', top: 30, left: 30 }} />
        </View>
        <View style={[styles.gridContainer]}>
          <Image source="/report/1_circle.png" style={{ position: 'relative', top: 40 }} />
          <View style={styles.p1_date_bg}>
            <View style={styles.col10}>
              <Text style={styles.p1_date}>2022.10</Text>
            </View>
          </View>
        </View>
        // ----------------------------------------------------------------------
        <View style={styles.p1_info_border}>
          <View style={[styles.p1_tableRow, styles.noBorder]}>
            <View style={styles.p1_text}>
              <Text style={styles.p1_info_title}>고객사</Text>
            </View>
            <View style={[styles.p1_text]}>
              <Text style={styles.p1_info_input}>abcdsds</Text>
            </View>
          </View>
          <View style={[styles.p1_tableRow, styles.noBorder]}>
            <View style={styles.p1_text}>
              <Text style={styles.p1_info_title}>SITE</Text>
            </View>
            <View style={[styles.p1_text]}>
              <Text style={styles.p1_info_input}>abcdsds</Text>
            </View>
          </View>
          <View style={[styles.p1_tableRow, styles.noBorder]}>
            <View style={styles.p1_text}>
              <Text style={styles.p1_info_title}>대상기기</Text>
            </View>
            <View style={[styles.p1_text]}>
              <Text style={styles.p1_info_input}>abcdsds</Text>
            </View>
          </View>
          <View style={[styles.p1_tableRow, styles.noBorder]}>
            <View style={styles.p1_text}>
              <Text style={styles.p1_info_title}>검사기간</Text>
            </View>
            <View style={[styles.p1_text]}>
              <Text style={styles.p1_info_input}>abcdsds</Text>
            </View>
          </View>
        </View>
      </Page>
      // 2----------------------------------------------------------------------
      <Page size="A4" style={styles.page}>
        <Image source="/report/report2.png" />
      </Page>
      // 3----------------------------------------------------------------------
      <Page size="A4" style={styles.page}>
        <Image source="/report/report3.png" />
      </Page>
      // 4----------------------------------------------------------------------
      <Page size="A4" style={styles.page}>
        <Image source="/report/report4.png" />
      </Page>
      // 5----------------------------------------------------------------------
      <Page size="A4" style={styles.page}>
        <Image source="/report/report5.png" />
      </Page>
      // 6---------------------------------------------------------------------
      <Page size="A4" style={styles.page}>
        <Image source="/report/6_header.png" />
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_hangmok}>
                <Text style={styles.p6_1_title}>항목</Text>
              </View>
              <View style={styles.p6_1_sayang}>
                <Text style={styles.p6_1_title}>사양</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableBody}>
            {/* {items.map((item, index) => ( */}
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>제 작 사</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>Cooling Water Source</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>Number of Tubes (BOX)</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>Number of Tubes (TOTAL)</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>Tube Material</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>Size of Tubes (O.D)</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>Size of Tubes (I.D)</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>Size of Tubes (Thick)</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>Length of Tube</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>Condenser shells Material</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>Tube Support Plate Material & Thickness</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
            <View style={styles.p6_1_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>Tube Sheet Material & Thickness</Text>
              </View>

              <View style={styles.p6_1_content_sayang}>
                <Text>sd</Text>
              </View>
            </View>
          </View>
        </View>

        <Image source="/report/6_header2.png" style={{ marginTop: 10 }} />

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.p6_2_tableRow}>
              <View style={styles.p6_1_hangmok}>
                <Text style={styles.p6_1_title}>BOX 구분</Text>
              </View>
              <View style={styles.p6_1_sayang}>
                <Text style={styles.p6_1_title}>A1</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableBody}>
            <View style={styles.p6_2_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>총 전열관</Text>
              </View>
            </View>
            <View style={styles.p6_2_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>기존 관막음수</Text>
              </View>
            </View>
            <View style={styles.p6_2_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>NO TUBE</Text>
              </View>
            </View>
            <View style={styles.p6_2_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>검사수량</Text>
              </View>
            </View>
            <View style={styles.p6_2_tableRow}>
              <View style={styles.p6_1_content_hangmok}>
                <Text>비고</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
      // 7---------------------------------------------------------------------
      <Page size="A4" style={styles.page}>
        <Image source="/report/report7.png" />
      </Page>
      // 8---------------------------------------------------------------------
      <Page size="A4" style={styles.page}>
        <Image source="/report/8_header.png" />
        <View style={{ paddingLeft: 55 }}>
          <View style={styles.p8_1_content_box}>
            <Text style={styles.p8_1_num}>01</Text>
            <Text style={styles.p8_1_type}>Probe Type</Text>
            <Text style={styles.p8_1_type_content}>Bobbin</Text>
          </View>
          <View style={styles.p8_1_content_box}>
            <Text style={styles.p8_1_num}>02</Text>
            <Text style={styles.p8_1_type}>Probe Velocity</Text>
            <Text style={styles.p8_1_type_content}>1.0m/s~</Text>
          </View>
          <View style={styles.p8_1_content_box}>
            <Text style={styles.p8_1_num}>03</Text>
            <Text style={styles.p8_1_type}>Test Frequency</Text>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.p8_tableHeader}>
              <View style={styles.p8_1_column}>
                <Text style={styles.p8_title}>구분</Text>
              </View>
              <View style={styles.p8_1_column}>
                <Text style={styles.p8_title}>사용 주파수</Text>
              </View>
              <View style={styles.p8_1_column}>
                <Text style={styles.p8_title}>보조 주파수</Text>
              </View>
              <View style={styles.p8_1_column}>
                <Text style={styles.p8_title}>MIX 주파수</Text>
              </View>
              <View style={styles.p8_1_column}>
                <Text style={styles.p8_title}>비고</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableBody}>
            <View style={styles.p8_tableRow}>
              <View style={styles.p8_table1_content}>
                <Text>Ti ()</Text>
              </View>
              <View style={styles.p8_table1_content}>
                <Text>620 kHZ</Text>
              </View>
              <View style={styles.p8_table1_content}>
                <Text> kHZ</Text>
              </View>
              <View style={styles.p8_table1_content}>
                <Text> kHZ</Text>
              </View>
            </View>
            <View style={styles.p8_tableRow}>
              <View style={styles.p8_table1_content}>
                <Text>S/S ()</Text>
              </View>
            </View>
            <View style={styles.p8_tableRow}>
              <View style={styles.p8_table1_content}>
                <Text>S/S ()</Text>
              </View>
            </View>
          </View>
        </View>
        <Image source="/report/8_header2.png" style={{ paddingTop: 30 }} />
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.p8_tableHeader}>
              <View style={styles.p8_2_column25}>
                <Text style={styles.p8_title}>구분</Text>
              </View>
              <View style={styles.p8_2_column50}>
                <Text style={styles.p8_title}>모델 및 수량</Text>
              </View>
              <View style={styles.p8_2_column25}>
                <Text style={styles.p8_title}>비고</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableBody}>
            <View style={styles.p8_tableRow}>
              <View style={styles.p8_table2_content25}>
                <Text>신호수집 Detector</Text>
              </View>
              <View style={styles.p8_table2_content50}>
                <Text>620 kHZ</Text>
              </View>
              <View style={styles.p8_table2_content25}>
                <Text>(주)딥아이</Text>
              </View>
            </View>
            <View style={styles.p8_tableRow}>
              <View style={styles.p8_table2_content25}>
                <Text>평가 Software</Text>
              </View>
            </View>
            <View style={styles.p8_tableRow}>
              <View style={styles.p8_table2_content25}>
                <Text>Note Book</Text>
              </View>
            </View>
            <View style={styles.p8_tableRow}>
              <View style={styles.p8_table2_content25}>
                <Text>탐촉자</Text>
              </View>
            </View>
            <View style={styles.p8_tableRow}>
              <View style={styles.p8_table2_content25}>
                <Text>교정 시험편</Text>
              </View>
            </View>
            <View style={styles.p8_tableRow}>
              <View style={styles.p8_table2_content25}>
                <Text>기타</Text>
              </View>
              <View style={styles.p8_table2_content50}>
                <Text>외장형 하드디스크</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
      // 9---------------------------------------------------------------------
      <Page size="A4" style={styles.page}>
        <Image source="/report/report9.png" />
      </Page>
      // 10---------------------------------------------------------------------
      <Page size="A4" style={styles.page}>
        <Image source="/report/report10.png" />
      </Page>
    </Document>
  );
}
