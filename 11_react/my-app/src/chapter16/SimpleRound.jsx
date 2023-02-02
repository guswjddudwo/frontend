import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// 설치하기
// react-router-dom이란? 
// 리액트를 위한 라우팅 라이브러리
// 라우팅: 사용자가 원하는 경로로 보내는 과정

// 페이지 나누는 법(리액트 미사용시)
// MPA라서 각 페이지 별 html 만듦
// /list 경로로 접속하면 해당 list.html 파일 보내줌 

// 페이지 나누는 법(리액트 사용시)
// SPA라서 index.html 파일 하나만 존재
// List 컴포넌트를 만듦
// /list 경로로 접속하면 기존 컴포넌트 자리에 List 컴포넌트 보여줌

// 라우팅 구성을 위한 기본 컴포넌트
// 1) BrowserRouter 2) Routes 3) Route

// 1) 웹 브라우저에서 react-router를 사용하여 라우팅 할 수 있도록 해주는 컴포넌트
//    웹 브라우저의 history 객체를 이용해서 경로를 탐색할 수 있게 해줌
// 2) Routes는 여러 개의 Route 컴포넌트를 자식으로 가질 수 있음
// 3) Route는 Routes의 하우 컴포넌트로서 path와 element라는 props를 갖고 있음
//    여기에서 path는 경로를 의미, element는 경로가 일지할 셩우 렌더링을 할 리액트 엘리먼트를 의미

// 사용자가 주소창에 새로운 경로를 입력하거나 페이지 내 경로 이동이 일어나게 되면 
// Route 컴포넌트 중에서 현재 경로와 일치하는경로를 찾아 해당 엘리먼트를 반환
// 그러면 사용자에게 보이는 화면이 바뀌게 되는 것

function SimpleRound(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/place" element={<PlacePage/>}/>
        <Route path="/game" element={<GamePage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default SimpleRound;