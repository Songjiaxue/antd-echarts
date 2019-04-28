import React from 'react';
import { Modal, Tabs, Switch, Input, Select, Slider, Collapse } from 'antd';
import _ from 'loadsh';
import ColorSelect from './color-select';
import '../index.scss';

const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

class ChangeItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      panes: [],
      data: null,
      res: {},
    }
  }
  mixinsValue = (v, item) => {
    return item.map(p => {
      let defaultValue = _.get(v, p.attr, p.defaultValue);
      if (p.item) {
        return Object.assign({}, p, {item: this.mixinsValue(v, p.item)});
      } 
      if (p.key === 'data') {
        if (defaultValue) {
          if (defaultValue && typeof(defaultValue[0]) === 'object' ) {
            defaultValue = defaultValue.map(v => v.join(',')).join(';')
          } else {
            defaultValue = defaultValue.join(',');
          }
        }
      }
      return Object.assign({}, p, {defaultValue,});
    });
  }
  getContent = (e, defaultValue = []) => {
    console.log(e, defaultValue);
    const type = e.changeItem.filter(v => v.onChange)[0];
    // show之前需要将defaultValue与配置文件融合 
    return defaultValue.map((v, i) => {
      let newItem = [
        ...e.changeItem.filter(r => !r.isChange),
        ...type.onChange(v.type).map(r => Object.assign({}, r, {isChange: true})),
      ];
      return {
        key: `${i}`,
        title: `第${i + 1}项`,
        content: this.renderContent(`${i}`, this.mixinsValue(v, newItem)),
      };
    });
  }
  getRes = (defaultValue = []) => {
    // tabpane的每一项的配置， 键值默认为数组索引
    let obj = {};
    defaultValue.forEach((t, i) => obj[i] = t);
    return obj;
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
      const defaultValue = v.formatValue ? v.formatValue(v.defaultValue) : v.defaultValue;
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
                this.updateRes(r, v.attr, e);
              }}
              key={i}
              item={v}
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
                  if (v.onChange) {
                    const { data, panes } = this.state;
                    const changeItem = [
                      ...data.changeItem.filter(u => !u.isChange),
                      ...v.onChange(e).map(q => Object.assign({}, q, { isChange: true,})),
                    ];
                    const p = panes.map(i => {
                      if (i.key === r) {
                        return Object.assign({}, i, {
                          content: this.renderContent(r, changeItem),
                        });
                      }
                      return i;
                    });
                    this.setState({
                      panes: p
                    });
                  }
                  const value = v.format ? v.format(e) : e;
                  this.updateRes(r, v.attr, value);
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
                defaultValue={isNaN(Number(defaultValue)) ? v.range[0] : Number(defaultValue)}
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
            <Collapse key={i}>
              <Panel header={v.label}>
                {
                  this.renderContent(r, v.item)
                }
              </Panel>
            </Collapse>
          );
        }
    });
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
    const { panes, data: {changeItem: t, }} = this.state;
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
export default ChangeItem;