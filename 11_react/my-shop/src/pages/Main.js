import React from 'react';
import styled  from "styled-components";

// 리액트(JS)에서 이미지 파일 import하는 법
import imagesImg from "../images/images.jpeg";

const MainBackground = styled.div`
height: 500px;
background-image: url(${imagesImg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

function Main(props) {
    return (
        <>
            <section>
                <MainBackground />
                {/* <img src={imagesImg}/> */}
            </section>
        </>
    );
}

export default Main;