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
  // 更新当前选择的菜单项
  @action updateType = (key) => {
    this.type = config.find(v => v.type === key);
  } 
  // 更新当前选择的echarts图
  @action updateCurrent = (data) => {
    this.current = data;
    sessionStorage.setItem('_current', JSON.stringify(data));
  }
  // 更新当前echarts的某个属性
  @action updateCurrentOptions = (key, data) => {
    let before = toJS(this.current.options);
    _.set(before, key, data);
    this.current = Object.assign({}, this.current, { options: before });
  }
}
export default new TypeStore();