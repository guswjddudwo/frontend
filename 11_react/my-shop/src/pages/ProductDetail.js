import React, { useEffect } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById, selectSelectedProduct } from "../features/product/productSlice";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";


function ProductDetail(props) {
    // useParams() 사용하여 productId 가져오기
    const { productId } = useParams();
    const dispatch = useDispatch(selectSelectedProduct);
    // Q. 전역스토어에서 selectedProduct  꺼내오기
    const product = useSelector((state) => state.product.selectedProduct);

    // 처음 마운트 됬을때 서버에 상품 id를 이용하여 데이터를 요텅하고 그 결과를 리덕스 스토어에 저장
    useEffect(() => {
    //   서버에서 특정 상품의 데이터를 가져오는 작업을 했다고 가정
    // ... api cal ....
        const foundProduct = data.find((product) => {
            return product.id === productId;
        });

        dispatch(getProductById(foundProduct))
    },[]);

    const handleChangeOrdercount = (e) => {
        setOrderCount(Number(e.target.value));

    }


    // product가 없을 경우에
    if (!product) {
        // return null;
        return <div>상품이 존재하지 않습니다.</div>
    }
    return (
        <Container className='pt-3'>
            {/* Q. 처음에 info 띄우고 3초 뒤에 사라지게 만들기
            처음 렌더링 됫을때 setTimeout으로 타이머 설정 */}
            <Alert variant='info' onClose={undefined} dismissible>
                현재 34명이 이 상품을 보고 있습니다.
            </Alert>

            <Row>
                {/* Q. 데이터 바인딩 작업 */}
                <Col md={6}>
                    <img src={product.imagePath} width="80%" />
                    이미지 영역
                </Col>
                <Col md={6}>
                    <h4 className='pt-5'>{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price}원</p>

                    <Col md={4} className='m-auto md-3' >
                        {/* Q. 아래 input type text를 제어 컴포넌트로 만들기 */}
                        {/* 1) 사용자가 입력한 값을 orderCount라는 state로 관리 */}
                        {/* 2) 사용자가 값을 입력할 때마다 orderCount에 값 저장 */}
                    <Form.Control type="text" value={orderCount} 
                    onChange={handleChangeOrdercount}
                    />
                    </Col>
                    <Button variant='primary'>주문하기</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetail;