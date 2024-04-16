import axios from 'axios';

export default class Test {
  /**
   * @description: 接口测试
   * @returns
   */
  static async Test() {
    return axios.get('/mock/test');
  }
}
