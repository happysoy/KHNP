import { Font, StyleSheet } from '@react-pdf/renderer';

// ----------------------------------------------------------------------

Font.register({
  family: 'NanumGothic',
  fonts: [{ src: '/fonts/NanumGothic.ttf' }, { src: '/fonts/NanumGothicBold.ttf' }],
});

const styles = StyleSheet.create({
  root: {
    margin: 0,
    padding: 0,
    fontSize: '10px',
    fontFamily: 'NanumGothic',
  },
  html: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  page: {
    width: '540px',
    height: '700px',
  },
  page__first_logo_cop: {
    fontSize: 14,
    fontWeight: 800,
    color: '#0298E2',
  },
  page__frist_logo: {
    width: '90px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: '22px',
    marginLeft: '20px',
  },
  page__first_top: {
    width: '100%',
    height: '18px',
    backgroundColor: '#0298E2',
  },
  page__first_btm: {
    width: '100%',
    height: '18px',
    backgroundColor: '#0298E2',
  },
  page__first_img: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
    marginBottom: '60px',
  },
  page__first_credit: {
    height: '130px',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '50px',
  },
  page__first_credit_frame: {
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    borderLeft: '2px solid #A6A6A6',
    boxSizing: 'border-box',
  },
  page__first_credit_item: {
    display: 'flex',
    alignItems: 'center',
  },
  page__first_credit_type: {
    width: '80px',
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#0298E2',
  },
  page__first_credit_value: {
    width: 'calc(100% - 80px)',
    fontSize: '1.4rem',
    fontWeight: 800,
  },
});

export default styles;
