import React from 'react';
import useRequest from '../hook/userRequest';
import PhotoCard from './PhotoCard';
import NavBar from './Nav';


export default function Data() {
  const { data, loading, error } = useRequest(
    'https://api.nasa.gov/planetary/apod?api_key=PGZGMrCnZwWQRecXqsROalxcmvyhygGql0iLL1Of'
  );

  if (loading)
    return (
      <LoadingDiv>
        <h1>Loading...</h1>
      </LoadingDiv>
    );
  if (error.error)
    return (
      <LoadingDiv>
        <h2>Oops! Something went wrong... {error.error.message}</h2>
      </LoadingDiv>
    );

  return (
    <PhotoDiv>
      <NavBar date={data.date} />
      <PhotoCard
        key={data.url}
        id={data.url}
        url={data.url}
        title={data.title}
        info={data.explanation}
        photo={data.url}
      />
    </PhotoDiv>
  );
}

