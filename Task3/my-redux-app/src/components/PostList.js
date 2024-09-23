// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, updatePost, deletePost } from '../features/post/postSlice';
import { Table, Button, Popconfirm, message } from 'antd';
import UpdatePostModal from './UpdateForm'

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Định nghĩa các cột cho bảng Ant Design
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      align: 'left',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
      align: 'left',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <span style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Button type="link" style={{
            backgroundColor: 'blue',
            color: 'white',
            marginRight: '4px'
          }} onClick={() => handleEdit(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete this post?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" style={{
              backgroundColor: 'red',
              color: 'white',
            }}>Delete</Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  const handleEdit = (record) => {
    setCurrentPost(record);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    message.success(`Post with ID ${id} deleted!`);
  };

  const handleUpdate = (values) => {
    dispatch(updatePost({ ...currentPost, ...values }));
    setIsModalVisible(false);
    message.success('Post updated successfully!');
    setCurrentPost(null); // Reset currentPost sau khi cập nhật
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentPost(null); // Reset currentPost khi đóng modal
  };

  console.log(currentPost)
  return (
    <div>
      <h2>Posts List</h2>
      <Table
        columns={columns}
        dataSource={posts}
        rowKey="id"
        bordered
        style={{ marginTop: 20 }}
      />
      <UpdatePostModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onUpdate={handleUpdate}
        currentPost={currentPost}
        
      />
    </div>
  );
};

export default PostList;
