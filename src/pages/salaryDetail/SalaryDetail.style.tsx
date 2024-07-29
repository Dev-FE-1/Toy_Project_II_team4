import styled from "styled-components"

export const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 1rem;
  max-height:35px;
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

export const Container = styled.div`
  text-align:center;
  font-size:1.6rem;
  .name {
    font-weight:
  }
  & > div {
    background: linear-gradient(180deg, var(--color-pri), #9FA1AB);
    color: var(--color-white);
    padding-bottom:5rem;
    margin:0 3px;
  }
`
export const ItemWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  padding-top:0.7rem;
  font-weight:var(--font-weight-bold);

  .pay > h5,
  .pay > h3{
  font-weight:var(--font-weight-bold);
  }
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

export const Movemonth = styled.div`
  height:40px;
`