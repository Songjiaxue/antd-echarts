import React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { Switch, Input, Select, Slider, Collapse  } from 'antd';
import _ from 'loadsh';
import ColorSelect from './color-select';
import AddItem from '../component/add-item';

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
  
  renderEcharts = (key, data) => {
    const { render, store } = this.props;
    store.updateCurrentOptions(key, data);
    render();
  }
  resizeEcharts = (key, data) => {
    const { render, store } = this.props;
    store.updateCurrentOptions(key, data);
    render(true);
  }
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
                this.renderEcharts(v.attr, e.hex);
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
                  this.renderEcharts(v.attr, e);
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
                  if (v.isContainer) {
                    this.resizeEcharts(v.attr, e);
                  }
                  this.renderEcharts(v.attr, e);
                }}
                step={v.step || 1}
                defaultValue={defaultValue}
              />
              <span>{defaultValue ? `${defaultValue}px` : ''}</span>
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
        case 'add':
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
    return group.map((v, i) => {
      return (
        <Collapse key={i}>
          <Panel header={v.title}>
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
      </div>
    );
  }
}
export default RenderGroup;