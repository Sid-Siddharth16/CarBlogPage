import { Post, User } from '@/types';
import axios from 'axios';

// Configure Axios instance (optional, for reusability)
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export async function getPosts(): Promise<Post[]> {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch {
    throw new Error('Failed to fetch posts');
  }
}

export async function getPost(id: string): Promise<Post> {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch {
    throw new Error('Failed to fetch post');
  }
}

export async function getUser(userId: string): Promise<User> {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch {
    throw new Error('Failed to fetch user');
  }
}