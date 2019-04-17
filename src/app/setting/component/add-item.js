import React from 'react';
import { Modal, Tabs, Switch, Input, Select, Slider } from 'antd';
import _ from 'loadsh';
import ColorSelect from './color-select';
import '../index.scss';

const TabPane = Tabs.TabPane;

class AddItem extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false,
      data: null, // 当前项的配置信息
      panes: [], // tabpane
      res: {}, // tabpane每一项的值，键值为tabpane key
    }
  }
  updateRes = (key, attr, value) => {
    const { res } = this.state;
    let obj = _.cloneDeep(res);
    _.set(obj, [key, ...attr], value);
    this.setState({
      res: obj,
    });
  }
  renderContent = (r, t) => {
    return t.map((v, i) => {
      const defaultValue = v.defaultValue;
      switch (v.type) {
        case 'switch':
          return (
            <div 
              className="group-item"
              key={i}
            >
              <span className="label">{v.label}：</span>
              <Switch 
                onChange={(e) => {
                  this.updateRes(r, v.attr, e);
                }}
                defaultChecked={defaultValue}
              />
            </div>
          );
        case 'colorSelect':
          return (
            <ColorSelect 
              onChange={(e) => {
                this.updateRes(r, v.attr, e.hex);
              }}
              key={i}
              title={v.label}
            />
          );
        case 'select':
          return (
            <div 
              className="group-item"
              key={i}
            >
              <span className="label">{v.label}：</span>
              <Select 
                onChange={(e) => {
                  this.updateRes(r, v.attr, e);
                }}
                placeholder="请选择"
                defaultValue={defaultValue}
              >
                {
                  v.options.map(y => <Select.Option key={y}>{y}</Select.Option>)
                }
              </Select>
            </div>
          );
        case 'slider':
          return (
            <div 
              className="group-item align"
              key={i}
            >
              <span className="label">{v.label}：</span>
              <Slider
                min={v.range[0]}
                max={v.range[1]}
                onChange={(e) => {
                  this.updateRes(r, v.attr, e);
                }}
                step={v.step || 1}
                defaultValue={defaultValue}
              />
            </div>
          );
        case 'input':
          return (
            <div
              className="group-item"
              key={i}
            >
              <span className="label">{v.label}：</span>
              <Input 
                onChange={(e) => {
                  this.updateRes(r, v.attr, v.format ? v.format(e.target.value) : e.target.value);
                }}
                placeholder="请输入"
                defaultValue={defaultValue}
              />
              {
                v.desc && v.desc.map((e, r) => <p key={r}>{e}</p>)
              }
            </div>
          );
        default:
          return (
            <React.Fragment key={i}>
              <div className="group-subTitle">{v.label}：</div>
              <div className="group-sub">
                {
                  this.renderContent(r, v.item)
                }
              </div>
            </React.Fragment>
          );
        }
    });
  }

  mixinsValue = (v, item) => {
    return item.map(p => {
      if (p.item) {
        return this.mixinsValue(v, p.item);
      } 
      return Object.assign({}, p, {defaultValue:  _.get(v, p.attr, p.defaultValue)});
    });
  }
  getContent = (e, defaultValue) => {
    let newItem = [];
    // show之前需要将defaultValue与配置文件融合 
    return defaultValue.map((v, i) => {
      // 如果defaultValue的每一项是字符串则将键值为key的值设值
      if (typeof v !== 'object') {
        newItem = e.item.map(t => {
          if (t.key === 'value') {
            return Object.assign({}, t, { defaultValue: v, });
          } 
          return t;
        });
      } else {
          // 若为对象则按路径去defaultvalue读值再设置
        newItem = this.mixinsValue(v, e.item).flat();
      }
      return {
        key: `${i}`,
        title: `第${i + 1}项`,
        content: this.renderContent(`${i}`, newItem),
      };
    });
  }
  getRes = (defaultValue) => {
    // tabpane的每一项的配置， 键值默认为数组索引
    let obj = {};
    defaultValue.forEach((t, i) => {
      if (typeof t !== 'object') {
        obj[i] = {value: t};
      } else {
        obj[i] = t;
      }
    });
    return obj;
  }
  
  // tabpane根据defaultValue生成
  show = (e, defaultValue) => {
    this.setState({
      visible: true,
      data: e,
      panes: this.getContent(e, defaultValue),
      res: this.getRes(defaultValue),
    });
  }
  hide = (e) => {
    this.setState({
      visible: false,
      data: null,
      panes: [],
      res: {},
    });
  }
  onEdit = (key, action) => {
    if (action === 'add') {
      this.add();
    } else if (action === 'remove'){
      this.remove(key);
    }
  }
  add = () => {
    const { panes, data: {item: t, } } = this.state;
    const newItem = {
      key: `${panes.length}`,
      title: `第${panes.length + 1}项`,
      content: this.renderContent(`${panes.length}`, t),
    };
    this.setState({
      panes: [
        ...panes,
        newItem,
      ],
    });
  }
  remove = (key) => {
    const { panes, res } = this.state;
    let obj = {...res,};
    delete obj[key];
    this.setState({
      panes: panes.filter(v => v.key !== key),
      res: obj,
    });
  }
  ok = () => {
    const { res, data } = this.state;
    const { onOk } = this.props;
    onOk(data.attr, Object.values(res));
    this.hide();
  }
  render () {
    const { visible, panes } = this.state; 
    return (
      <Modal
        title="添加新项"
        visible={visible}
        destroyOnClose
        onOk={this.ok}
        onCancel={this.hide}
        width="570px"
        okText="保存"
        cancelText="取消"
        className="setting-common"
      >
        <Tabs
          onChange={this.onChange}
          type="editable-card"
          onEdit={this.onEdit}
          className="group"
        >
          {
            panes.map((v, i) => {
              return (
                <TabPane
                  tab={`第${i + 1}项`}
                  key={v.key}
                >
                  {v.content}
                </TabPane>
              );
            })
          }
        </Tabs>
      </Modal>
    );
  }
}
export default AddItem;