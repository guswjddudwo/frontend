import React from 'react';
import styled from "styled-components";
import CommentListItem from './CommentListItem';
import PostList from './PostList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
// 댓글의 내용만 표시해주는 컴포넌트
function CommentList(props) {
  const {comments} = props;
  return (
    <Wrapper>
      {/* 반복렌더링 */}
      {comments.map((comments) => {
        <CommentListItem 
        key={comment.id}
        comment={comment}
        />
      })}
    </Wrapper>
 
  );
}

export default CommentList;