import { observable, action, toJS } from 'mobx';
import _ from 'loadsh';
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
    let before = toJS(this.current.options);
    _.set(before, key, data);
    this.current = Object.assign({}, this.current, { options: before });
  }
}
export default new TypeStore();