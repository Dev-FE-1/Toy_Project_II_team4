import styled from "styled-components"

export const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-sizing:border-box;

  .css-i4bv87-MuiSvgIcon-root{
    width:3rem;
    height:3.5rem;
  }
`;

export const Listline = styled.div`
  background-color:var(--border-pri);
  height:0.1rem;
`;

export const Thinline = styled.div`
  background-color:var(--border-sec);
  height:0.05rem;
`;

export const LSection = styled.div`
display: flex;
align-items:center;
gap: 1rem; 
`;

export const RSection = styled.div`
display: flex;
align-items:center;
gap: 1rem; 
`;

export const ListWrapper = styled.div<{ type?:string }>`
  display:flex;
  justify-content: space-between;
  gap: 1rem;
  padding:1rem;

  div{
    font-size: ${props => props.type === 'main' ? '1rem' : '0.875rem'};
    font-weight: ${props => props.type === 'main' ? 'bold' : 'normal'};
  }
`;

export const Info = styled.div`
  margin-top:2.3rem;
`;
