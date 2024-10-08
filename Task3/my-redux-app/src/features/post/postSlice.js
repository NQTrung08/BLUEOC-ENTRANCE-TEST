
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Tạo action để fetch posts từ API
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (newPost) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
  return response.data;
});

export const updatePost = createAsyncThunk('posts/updatePost', async (post) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  return response.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return id;
});


const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',  // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload); // Thêm bài viết mới vào danh sách
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post.id === action.payload);
        if (index!== -1) {
          state.posts.splice(index, 1); // Xóa bài viết từ danh sách
        }
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post.id === action.payload.id);
        if (index!== -1) {
          state.posts[index] = action.payload; // Cập nhật bài viết trong danh sách
        }
      });

  },
});

export default postsSlice.reducer;
