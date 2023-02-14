import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled  from "styled-components";
import { useDispatch,useSelector } from "react-redux";


// 리액트(JS)에서 이미지 파일 import하는 법
import imagesImg from "../images/images.jpeg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import ProductSlice, {getAllproducts} from '../features/product/productSlice'
import ProductListItem from '../components/ProductListItem';

const MainBackground = styled.div`
height: 500px;
background-image: url(${imagesImg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

function Main(props) {
     const dispatch = useDispatch();
     const productList = useSelector((state) => state.product.productList);
    // 처음 마운트 됬을때 서버에 상품 목록 데이터를 요청하고
    // 그 결과를 리덕스 스토어에 저장
    useEffect(() => {
      // 서버에 데이터를 요청했다고 가정
      // ...api call ...
      dispatch(getAllproducts(data));
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
        
            {/* Q. 반복적인 상품 목록 아이템 productListItem 컴포넌트화 시키기 */}
            {/* Q. productList 배열을 반복하며 productListItem 렌더링 */}
            {/* Q. 상품 정보를 props로 넘겨서 데이터 바인딩 */}
       {productList.map((product) =>  
       <ProductListItem key={product.id} product={product} />
       )}
            </section>
        </>
    );
}

export default Main;