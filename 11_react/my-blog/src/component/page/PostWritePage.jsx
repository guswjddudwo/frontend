import React from 'react';
import styled from "styled-components";
import { useNavigate, useParams } from 'react';
import { useParams } from 'react';

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;

	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;


// 글 작성을 위한 페이지 
function PostWritePage(props) {
  const navigate = useNavigate();
	// URL 파라미터로 전달받은 글의 id값 가져오기
	// useParams(): 사용자가 URL 파라미터에 입력한 겂을 가져올 수 있음
	const {postId} = useParams();
	console.log(useParams());


	// 글의 제목과 내용을 위한 state
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	return (
    <Wrapper>
			<Container>
				{/* 글 제목 입력 */}
				<TextInput 
				height={20}
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				/>

				{/* 글내용입력 */}
				<TextInput 
				height={480}
				value={content}
				onChange={(e) => {
					setContent(e.target.value);
				}}
				/>


				{/* 글 작성버튼 */}
				<Button
				title='글 작성하기'
				onClick={(e) => {
					navigate('/');
				}}
				/>
			</Container>
		</Wrapper>
  );
}

export default PostWritePage;