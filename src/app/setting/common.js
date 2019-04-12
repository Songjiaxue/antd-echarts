import React from 'react';
import { inject, observer } from 'mobx-react';
import { Switch, Input, Select, Slider } from 'antd';
import { SketchPicker } from 'react-color';

@inject('store')
@observer
class SettingCommon extends React.Component{
  state = {
    showColor: false,
    showBorderColor: false,
    showShadowColor: false,
  }
  renderEcharts = (key, data) => {
    const { render, store } = this.props;
    store.updateCurrentOptions(key, data);
    render();
  }
  render () {
    const { showColor, showBorderColor, showShadowColor } = this.state;
    return (
      <div className="setting-common">
        <div 
          className="group"
        >
          <div className="group-title">标题</div>
          <div className="group-item">
            <span className="label">显示：</span>
            <Switch 
              onChange={(e) => {
                this.renderEcharts(['title'], { show: e, });
              }}
              defaultChecked
            />
          </div>
          <div className="group-item">
            <span className="label">文本：</span>
            <Input 
              onChange={(e) => {
                this.renderEcharts(['title'], { text: e.target.value, });
              }}
              placeholder="请输入"
            />
          </div>
          <div className="group-subTitle">标题样式 textStyle</div>
          <div className="group-item">
            <span className="label">颜色：</span>
            <span 
              className="color-block"
              onClick={() => {
                this.setState({
                  showColor: !showColor,
                });
              }}
            />
            {
              showColor && (
                <SketchPicker 
                  onChange={(e) => {
                    this.setState({
                      showColor: false,
                    });
                    this.renderEcharts(['title', 'textStyle'], {color: e.hex,});
                  }}
                /> 
              )
            }
          </div>
          <div className="group-item">
            <span className="label">文字字体风格：</span>
            <Select 
              onChange={(e) => {
                this.renderEcharts(['title', 'textStyle'], { fontStyle: e, });
              }}
              placeholder="请选择"
              defaultValue="normal"
            >
              <Select.Option key="normal">normal</Select.Option>
              <Select.Option key="italic">italic</Select.Option>
              <Select.Option key="oblique">oblique</Select.Option>
            </Select>
          </div>
          <div className="group-item">
            <span className="label">文字字体粗细：</span>
            <Select 
              onChange={(e) => {
                this.renderEcharts(['title', 'textStyle'], { fontWeight: e, });
              }}
              placeholder="请选择"
              defaultValue="normal"
            >
              <Select.Option key="normal">normal</Select.Option>
              <Select.Option key="blod">blod</Select.Option>
              <Select.Option key="bloder">bloder</Select.Option>
              <Select.Option key="lighter">lighter</Select.Option>
            </Select>
          </div>
          <div className="group-item">
            <span className="label">文字字体：</span>
            <Input 
              onChange={(e) => {
                this.renderEcharts(['title', 'textStyle'], { fontFamily: e.target.value, });
              }}
              placeholder="默认sans-serif"
            />
            <p> 还可以是'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...</p>
          </div>
          <div className="group-item align">
            <span className="label">文字字体大小：</span>
            <Slider
              min={12}
              max={72}
              onChange={(e) => {
                this.renderEcharts(['title', 'textStyle'], { fontSize: e, });
              }}
              defaultValue={18}
            />
          </div>
          <div className="group-item align">
            <span className="label">行高：</span>
            <Slider
              min={12}
              max={72}
              onChange={(e) => {
                this.renderEcharts(['title', 'textStyle'], { lineHeight: e, });
              }}
              defaultValue={18}
            />
          </div>
          <div className="group-item">
            <span className="label">文字描边颜色：</span>
            <span 
              className="color-block"
              onClick={(e) => {
                e.stopPropagation();
                this.setState({
                  showBorderColor: !showBorderColor,
                });
              }}
            />
            {
              showBorderColor && (
                <SketchPicker 
                  onChangeComplete={(e) => {
                    console.log(e);
                    this.renderEcharts(['title', 'textStyle'], {textBorderColor: e.hex,});
                  }}
                /> 
              )
            }
          </div>
          <div className="group-item align">
            <span className="label">文字描边宽度：</span>
            <Slider
              min={0}
              max={10}
              onChange={(e) => {
                this.renderEcharts(['title', 'textStyle'], { textBorderWidth: e, });
              }}
              defaultValue={0}
            />
          </div>
          <div className="group-item">
            <span className="label">文字阴影颜色：</span>
            <span 
              className="color-block"
              onClick={(e) => {
                e.stopPropagation();
                this.setState({
                  showShadowColor: !showShadowColor,
                });
              }}
            />
            {
              showShadowColor && (
                <SketchPicker 
                  onChangeComplete={(e) => {
                    console.log(e);
                    this.renderEcharts(['title', 'textStyle'], {textShadowColor: e.hex,});
                  }}
                /> 
              )
            }
          </div>
          <div className="group-item align">
            <span className="label">文字阴影宽度：</span>
            <Slider
              min={0}
              max={10}
              onChange={(e) => {
                this.renderEcharts(['title', 'textStyle'], { textShadowBlur: e, });
              }}
              defaultValue={0}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default SettingCommon;