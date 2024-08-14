import './reset.css';
import { GlobalStyles } from '@mui/material';
// import './fonts.css';

export default function GlobalStyle() {
  return (
    <GlobalStyles
      styles={{
        ':root': {
          /* Font system */
          '--font-family-primary': "'SUIT'",
          '--font-weight-extra-bold': '800',
          '--font-weight-bold': '700',
          '--font-weight-semibold': '600',
          '--font-weight-medium': '500',
          '--font-weight-regular': '400',

          /* Color system */
          '--color-pri': '#3282F6',
          '--color-pri-white': '#8AB3EC;',
          '--color-pri-moreWhite': '#ecf5fe',
          '--color-sec': '#E8F3FF',
          '--color-tar': '#686d76',
          '--color-blue': '#3473e1',
          '--color-yellow': '#ffcb34',
          '--color-green': '#039c00',

          '--color-black': '#2b2b2b',
          '--color-white': '#ffffff',

          '--font-pri': '#333333',
          '--font-sec': '#9fa1ab',
          '--font-tar': '#686d76',

          '--border-pri': '#9a9a9a',
          '--border-sec': '#eeeeee',

          '--page-gray': '#F0F3F8',

          /* font size system */
          '--font-size-primary': '1.5rem',
          '--font-size-small': '1.2rem',
          '--font-size-large': '1.8rem',
          '--font-size-xlarge': '2.2rem',
        },
        '*': {
          fontFamily: 'var(--font-family-primary)',
        },
        html: {
          fontSize: '10px',
          backgroundColor: 'var(--font-pri)',
        },
        body: {
          fontWeight: 'var(--font-weight-regular)',
          maxWidth: '568px',
          margin: '0 auto',
          // backgroundColor: '#ecf5fe',
          // backgroundImage: 'linear-gradient(180deg, #ecf5fe 0%, #f3f4f6 100%)',
          backgroundColor: '#f3f4f6',
        },
        '#root': {
          minHeight: '100vh', // root 요소가 최소한 뷰포트 높이만큼 차지하도록 설정
          display: 'flex',
          flexDirection: 'column',
        },
        'h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6': {
          fontFamily: 'var(--font-family-primary)',
        },
        h1: {
          fontSize: '2.6rem',
          lineHeight: '3.9rem',
          fontWeight: 'var(--font-weight-bold)',
        },
        h2: {
          fontSize: 'var(--font-size-xlarge)',
          lineHeight: '3.3rem',
          fontWeight: 'var(--font-weight-semibold)',
        },
        h3: {
          fontSize: 'var(--font-size-large)',
          lineHeight: '2.7rem',
          fontWeight: 'var(--font-weight-medium)',
        },
        h4: {
          fontSize: '1.6rem',
          lineHeight: '2.4rem',
          fontWeight: 'var(--font-weight-medium)',
        },
        h5: {
          fontSize: 'var(--font-size-primary)',
          lineHeight: '2.1rem',
          fontWeight: 'var(--font-weight-medium)',
        },
        h6: {
          fontSize: 'var(--font-size-small)',
          lineHeight: '1.8rem',
          fontWeight: 'var(--font-weight-medium)',
        },
        a: {
          display: 'inline-block',
          textDecoration: 'none',
          color: 'inherit',
        },
        label: {
          fontFamily: 'var(--font-family-primary)',
        },
      }}
    />
  );
}
