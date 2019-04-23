import React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { Switch, Input, Select, Slider, Collapse  } from 'antd';
import _ from 'loadsh';
import ColorSelect from './color-select';
import AddItem from '../component/add-item';
import ChangeItem from './change-item';

const Panel = Collapse.Panel;

@inject('store')
@observer
class RenderGroup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: new Array(props.config.length).fill(false),
    }
  }
  // 属性变化， echrts重新渲染
  renderEcharts = (key, data) => {
    const { render, store } = this.props;
    store.updateCurrentOptions(key, data);
    render();
  }
  // 容器大小变化，重新渲染echarts
  resizeEcharts = (key, data) => {
    const { render, store } = this.props;
    store.updateCurrentOptions(key, data);
    render(true);
  }
  // 渲染属性表单
  renderItem = (t) => {
    const { store: { current, } } = this.props;
    return t.map((v, i) => {
      const defaultValue = _.get(toJS(current.options), v.attr, v.defaultValue);
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
                  this.renderEcharts(v.attr, e);
                }}
                defaultChecked={defaultValue}
              />
            </div>
          );
        case 'colorSelect':
          return (
            <ColorSelect 
              onChange={(e) => {
                this.renderEcharts(v.attr, e);
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
                  this.renderEcharts(v.attr, e);
                }}
                placeholder="请选择"
                defaultValue={defaultValue}
                {...v.otherParams}
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
                  const value = v.format ? v.format(e) : e;
                  if (v.isContainer) {
                    this.resizeEcharts(v.attr, value);
                  }
                  this.renderEcharts(v.attr, value);
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
                  this.renderEcharts(v.attr, v.format ? v.format(e.target.value) : e.target.value);
                }}
                placeholder="请输入"
                defaultValue={defaultValue}
              />
              {
                v.desc && v.desc.map((e, r) => <p key={r}>{e}</p>)
              }
            </div>
          );
        case 'add': // 属性为数组
          return (
            <div
              className="group-item"
              key={i}
            >
              <span className="label">{v.label}：</span>
              <span 
                className="add-item"
                onClick={() => {
                  // v: 当前项的所有配置
                  // defaultValue: 当前项的所有value值
                  this.addItem.show(v, defaultValue);
                }}
              >
              添加或编辑类目
              </span>
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
                  this.renderItem(v.item)
                }
              </Panel>
            </Collapse> 
          );
      }
    });
  }
  renderGroup = (group) => {
    const { store: { current, } } = this.props;
    return group.map((v, i) => {
      const defaultValue = _.get(toJS(current.options), v.attr, v.defaultValue);
      return (
        <Collapse key={i}>
          <Panel
            header={v.title}
            extra={v.type === 'change' && ( // 属性为数组
              <span 
                className="add-item"
                onClick={() => {
                  // v: 当前项的所有配置
                  // defaultValue: 当前项的所有value值
                  this.changeItem.show(v, defaultValue);
                }}
              >
              添加或编辑项
              </span>    
            )}
          >
            {v.item && this.renderItem(v.item)}
          </Panel>
        </Collapse> 
      );
    });
  }
  render () {
    const { config } = this.props;
    return (
      <div className="setting-common">
        { 
          this.renderGroup(config)
        }
        <AddItem
          ref={ref => this.addItem = ref}
          onOk={this.renderEcharts}
        />
        <ChangeItem
          ref={ref => this.changeItem = ref}
          onOk={this.renderEcharts}
        />
      </div>
    );
  }
}
export default RenderGroup;