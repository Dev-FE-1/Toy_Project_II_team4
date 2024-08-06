import React from 'react';
import * as Styled from './SalaryDetail.style';
import {SalaryDetailItem} from '../salaryList/api/fetchSalaryInfo';

interface ListWrapperItems {
  details: SalaryDetailItem[]
}

export default function ListWrapper({details}:ListWrapperItems) {
    return (
    <>     
    {details.map((item, index)=>
      <React.Fragment key={index}>
        <Styled.ListWrapper type={item.type} content={item.content}>
          <div>{item.label}</div>
          <div className='price'>{item.value} 원</div>
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