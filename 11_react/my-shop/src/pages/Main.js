import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled  from "styled-components";
import { useDispatch,useSelector } from "react-redux";

// 리액트(JS)에서 이미지 파일 import하는 법
import imagesImg from "../images/images.jpeg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";

const MainBackground = styled.div`
height: 500px;
background-image: url(${imagesImg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

function Main(props) {
     const dispatch = useDispatch();
    // 처음 마운트 됬을때 서버에 상품 목록 데이터를 요청하고
    // 그 결과를 리덕스 스토어에 저장
    useEffect(() => {
      // 서버에 데이터를 요청했다고 가정
      // ...api call ...
      dispatch(getAllProducts(data));
    },[]);



    return (
        <>
        {/* 메인 이미지 섹션 */}
            <section>
                <MainBackground />
                {/* <img src={imagesImg}/> */}
            </section>

            {/* 상품 목록 섹션 */}
            <section>
            <Container>
            <Row>
            <Col md={4}>
                <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" width="80%" />
                <h4>상품명</h4>
                <p>상품가격</p>
            </Col>
            <Col md={4}>
                <img src="https://www.yonexmall.com/shop/data/goods/1659329583483s0.png" width="80%" />
                <h4>상품명</h4>
                <p>상품가격</p>
            </Col>
            <Col md={4}>
                <img src="https://www.yonexmall.com/shop/data/goods/1667190100104s0.png" width="80%" />
                <h4>상품명</h4>
                <p>상품가격</p>
            </Col>
            </Row>
        </Container>
            </section>
        </>
    );
}

export default Main;