import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { Button, Modal } from 'antd';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Provider store={store}>
      <div>
        {/* Nút Add Post */}
        <Button type="primary" onClick={showModal} style={{
          marginBottom: 10,
          marginLeft: 10,
          marginTop: 20,
          float: 'right'
        }}>
          Add Post
        </Button>

        {/* Modal chứa PostForm */}
        <Modal
          title="Add New Post"
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <PostForm onClose={handleCancel} />
        </Modal>

        {/* Danh sách Post */}
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
