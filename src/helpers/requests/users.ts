import axios from 'axios';
import { userType } from '../../types/UserType';
class Users {
  static getAllUsers() {
    return axios.get('/users');
  }

  static getUser(userId: number) {
    return axios.get(`/users/${userId}`);
  }

  static getUserByQuery(query: string) {
    console.log('query', query);
    return axios.get(`/users?${query}`);
  }

  static createUser(user: userType) {
    return axios.post('/users', user);
  }

  static updateUser(userId: number | string, user: any) {
    return axios.put(`/users/${userId}`, user);
  }

  static deleteUser(userId: string | number) {
    return axios.delete(`/users/${userId}`);
  }
}

export default Users;
