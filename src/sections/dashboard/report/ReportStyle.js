import { Font, StyleSheet } from '@react-pdf/renderer';

// ----------------------------------------------------------------------

Font.register({
  family: 'NanumGothic',
  fonts: [{ src: '/fonts/NanumGothic.ttf' }, { src: '/fonts/NanumGothicBold.ttf' }],
});

const styles = StyleSheet.create({
  col4: { width: '25%' },
  col8: { width: '75%' },
  col6: { width: '50%' },
  col10: { width: '100%' },
  mb8: { marginBottom: 8 },
  mb40: { marginBottom: 40 },
  overline: {
    fontSize: 8,
    marginBottom: 8,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  h3: { fontSize: 16, fontWeight: 700 },
  h4: { fontSize: 13, fontWeight: 700 },

  body1: { fontSize: 10 },
  subtitle2: { fontSize: 9, fontWeight: 700 },
  alignRight: { textAlign: 'right' },
  page: {
    // padding: '24px 24px 0 24px',
    fontSize: 9,
    lineHeight: 1.6,
    fontFamily: 'NanumGothic',
    backgroundColor: '#fff',
  },
  footer: {
    left: 0,
    right: 0,
    bottom: 0,
    padding: 24,
    margin: 'auto',
    borderTopWidth: 1,
    borderStyle: 'solid',
    position: 'absolute',
    borderColor: '#DFE3E8',
  },

  gridContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  table: { display: 'flex', width: '90%', padding: '24px 24px 0 24px', left: 0, right: 0, margin: '0 auto' },
  tableHeader: {},
  tableBody: {},
  p1_tableRow: {
    padding: '8px 0',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DFE3E8',
  },
  noBorder: { paddingTop: 8, paddingBottom: 0, borderBottomWidth: 0 },
  tableCell_1: { width: '5%' },
  tableCell_2: { width: '50%', paddingRight: 16 },
  tableCell_3: { width: '15%' },
  p1_row: {
    padding: '8px 0',
    flexDirection: 'row',
  },
  p1_border: {
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    borderColor: '#108ccf',
  },

  p1_text: {
    width: '15%',
  },

  p1_date_bg: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
  },
  p1_date: {
    fontSize: 24,
    textAlign: 'center',
    top: 340,
    color: 'white',
  },
  p1_info_border: {
    padding: '5px',
    top: 80,
    left: 300,
    borderLeftWidth: 3,
    borderStyle: 'solid',
    borderColor: '#DFE3E8',
  },
  p1_info_title: {
    marginLeft: 15,
    marginRight: 10,
    fontSize: 16,
    fontWeight: 800,
    color: '#108ccf',
  },
  p1_info_input: {
    fontSize: 16,
    fontWeight: 400,
  },
  p6_1_hangmok: {
    width: '40%',
    paddingRight: 10,
    backgroundColor: '#108ccf',
  },
  p6_1_sayang: {
    width: '60%',
    backgroundColor: '#108ccf',
  },
  p6_1_title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 700,
    textAlign: 'center',
    top: '15%',
  },
  p6_1_tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DFE3E8',
  },
  p6_1_content_hangmok: {
    fontSize: 12,
    textAlign: 'center',
    width: '40%',
    top: 5,
  },
  p6_1_content_sayang: {
    fontSize: 12,
    textAlign: 'left',
    width: '60%',
    top: 5,
  },
  p6_2_tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DFE3E8',
  },
  p8_1_content_box: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  p8_1_num: {
    backgroundColor: '#108ccf',
    color: 'white',
    padding: '5px',
    fontWeight: 800,
    fontSize: 14,
  },
  p8_1_type: { padding: '5px', fontSize: 14, fontWeight: 800 },
  p8_1_type_content: {
    fontSize: 14,
    padding: '5px',
  },
  table: {
    display: 'flex',
    width: '90%',
    padding: '0 24px 0 24px',
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  p8_tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DFE3E8',
    borderLeftWidth: 1,
    borderLeftWidth: 1,
    padding: 4,
    backgroundColor: '#108ccf',
  },
  p8_tableRow: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DFE3E8',
  },
  p8_1_column: {
    width: '20%',
  },
  p8_title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 800,
    textAlign: 'center',
    top: '15%',
  },
  p8_table1_content: {
    fontSize: 12,
    textAlign: 'center',
    width: '20%',
    top: 5,
  },
  p8_table2_content25: {
    fontSize: 12,
    textAlign: 'center',
    width: '25%',
    top: 5,
  },
  p8_table2_content50: {
    fontSize: 12,
    textAlign: 'center',
    width: '50%',
    top: 5,
  },
  p8_2_column25: {
    width: '25%',
  },
  p8_2_column50: {
    width: '50%',
  },
});

export default styles;
