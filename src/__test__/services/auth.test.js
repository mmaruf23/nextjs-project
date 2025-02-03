import axios from 'axios';
import { register, login, getUsername } from '@/services/auth';

jest.mock('axios');

describe('API Service', () => {
  it('should register successfully', async () => {
    const payload = { username: 'test', password: 'password' };
    const mockResponse = { data: { message: 'Registered successfully' } };

    axios.post.mockResolvedValue(mockResponse); // Mock axios post response

    const response = await register(payload);

    expect(response).toEqual(mockResponse); // Verify the response
  });

  it('should login successfully', async () => {
    const payload = { username: 'test', password: 'password' };
    const mockResponse = { data: { message: 'Login successful' } };

    axios.post.mockResolvedValue(mockResponse); // Mock axios post response

    const response = await login(payload);

    expect(response).toEqual(mockResponse); // Verify the response
  });

  it('should fetch username successfully', async () => {
    const userId = 1;
    const mockResponse = { data: { id: 1, username: 'testuser' } };

    axios.get.mockResolvedValue(mockResponse); // Mock axios get response

    const response = await getUsername(userId);

    expect(response).toEqual(mockResponse); // Verify the response
  });

  it('should handle error in register', async () => {
    const payload = { username: 'test', password: 'password' };
    const mockError = { response: { status: 400, data: { message: 'Error' } } };

    axios.post.mockRejectedValue(mockError); // Mock axios error response

    const response = await register(payload);

    expect(response).toEqual(mockError.response); // Verify the error response
  });
});
