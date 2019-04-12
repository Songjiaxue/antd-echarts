import { observable, action } from 'mobx';
import config from '../app/menu/config';

class TypeStore {
  @observable type = {}; // 当前选择的菜单项
  @observable current = {}; // 当前选择的echarts图

  constructor() {
    this.type = config[0];
    this.current = JSON.parse(sessionStorage.getItem('_current'));
  }
  @action updateType = (key) => {
    this.type = config.find(v => v.type === key);
  } 
  @action updateCurrent = (data) => {
    this.current = data;
    sessionStorage.setItem('_current', JSON.stringify(data));
  }
  @action updateCurrentOptions = (key, data) => {
    let before = JSON.parse(JSON.stringify(this.current.options));
    if (key.length > 1) {
      before[key[0]] = before[key[0]] || {};
      before[key[0]][key[1]] = data;
    } else {
      before[key[0]] = data;
    }
    this.current = Object.assign({}, this.current, { options: before });
  }
}
export default new TypeStore();