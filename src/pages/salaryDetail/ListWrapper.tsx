import React from 'react';
import * as Styled from './SalaryDetail.style';

type SalaryDetailItem = {
    label:string;
    value:string;
    type?: 'main' | 'sub'
}

type ListWrapperProps = {
    details:SalaryDetailItem[];
}

export default function ListWrapper({details}:ListWrapperProps) {
    return (
    <>     
    {details.map((item, index)=>
      <React.Fragment key={index}>
        <Styled.ListWrapper type={item.type}>
          <div>{item.label}</div>
          <div>{item.value}원</div>
        </Styled.ListWrapper>
        {item.type === 'main' && index !== details.length - 1 && (
          <Styled.Thinline />
        )}
        {item.type === 'sub' && index !== details.length - 1 &&
          (<Styled.Listline/>)
        }
        </React.Fragment>
        )}
      </>
    );
  }