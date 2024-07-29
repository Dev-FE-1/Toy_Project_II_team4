import { GlobalStyles } from '@mui/material';
import './fonts.css';

export default function GlobalStyle() {
  return (
    <GlobalStyles
      styles={{
        ':root': {
          /* Font system */
          '--font-family-primary': "'LINE Seed Sans KR', 'LINE Seed Sans', sans-serif",
          '--font-weight-bold': '700',
          '--font-weight-semibold': '600',
          '--font-weight-medium': '500',

          /* Color system */
          '--color-pri': '#dc5f00',
          '--color-pri-white': '#ffb987;',
          '--color-sec': '#373a40',
          '--color-tar': '#686d76',
          '--color-blue': '#3473e1',
          '--color-yellow': '#ffcb34',
          '--color-green': '#039c00',

          '--color-black': '#2b2b2b',
          '--color-white': '#ffffff',

          '--font-pri': '#333333',
          '--font-sec': '#9fa1ab',

          '--border-pri': '#9a9a9a',
          '--border-sec': '#eeeeee',
        },
        '*': {
          fontFamily: 'var(--font-family-primary)',
        },
        html: {
          fontSize: '10px',
        },
        body: {
          fontWeight: 400,
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
          fontSize: '2.2rem',
          lineHeight: '3.3rem',
          fontWeight: 'var(--font-weight-semibold)',
        },
        h3: {
          fontSize: '1.8rem',
          lineHeight: '2.7rem',
          fontWeight: 'var(--font-weight-medium)',
        },
        h4: {
          fontSize: '1.6rem',
          lineHeight: '2.4rem',
          fontWeight: 'var(--font-weight-medium)',
        },
        h5: {
          fontSize: '1.4rem',
          lineHeight: '2.1rem',
          fontWeight: 'var(--font-weight-medium)',
        },
        h6: {
          fontSize: '1.2rem',
          lineHeight: '1.8rem',
          fontWeight: 'var(--font-weight-medium)',
        },
      }}
    />
  );
}
