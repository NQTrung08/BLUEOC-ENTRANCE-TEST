// src/components/PostForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/post/postSlice';
import { Form, Input, Button } from 'antd';

const PostForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    const newPost = { title, body };
    dispatch(addPost(newPost));
    onClose(); // Đóng modal sau khi thêm post
  };

  return (
    <Form onFinish={handleSubmit} layout="vertical">
      <Form.Item label="Title">
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Item>
      <Form.Item label="Body">
        <Input.TextArea value={body} onChange={(e) => setBody(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PostForm;
