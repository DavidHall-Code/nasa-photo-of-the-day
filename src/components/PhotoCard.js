import React from 'react';
import styled from 'styled-components'

export default function PhotoCard(props) {
  return (
    <PhotoCardDiv>
      <img alt='nasaPhoto' className='nasaPhoto' src={props.url} />
      <h1>{props.title}</h1>
      <p>{props.info}</p>
    </PhotoCardDiv>
  );
}

const PhotoCardDiv = styled.div`
  
`;
