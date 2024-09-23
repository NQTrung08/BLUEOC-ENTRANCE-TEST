// src/components/EditPostModal.js
import React, { useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const UpdatePostModal = ({ visible, onCancel, onUpdate, currentPost }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(currentPost);
    }
  }, [visible, currentPost, form]);


  return (
    <Modal
      title="Edit Post"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={form}
        onFinish={onUpdate}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="body"
          label="Body"
          rules={[{ required: true, message: 'Please input the body!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Update</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdatePostModal;
