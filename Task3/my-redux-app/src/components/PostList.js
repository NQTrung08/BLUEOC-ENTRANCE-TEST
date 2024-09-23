// src/components/PostList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/post/postSlice';
import { Table, Button, Popconfirm, message } from 'antd';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

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
          justifyContent:'center',
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
    // Xử lý logic sửa bài viết
    message.info(`Edit post: ${record.title}`);
  };

  const handleDelete = (id) => {
    // Xử lý logic xóa bài viết
    message.success(`Post with ID ${id} deleted!`);
    // Bạn có thể thêm logic xóa từ API và cập nhật state
  };

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
    </div>
  );
};

export default PostList;
