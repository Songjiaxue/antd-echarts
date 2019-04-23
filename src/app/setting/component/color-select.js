import React from 'react';
import { SketchPicker } from 'react-color';

class ColorSelect extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: props.item.defaultValue || '#fff',
    };
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextState.show === this.state.show){
      return false
    }
    return true;
  }
  render () {
    const { show, value } = this.state;
    const { item } = this.props;
    return (
      <div className="group-item">
        <span className="label">{item.label}：</span>
        <span 
          className="color-block"
          onClick={() => {
            this.setState({
              show: !show,
            });
          }}
          style={{
            background: value,
          }}
        />
        <span>{value}</span>
        {
          show && (
            <SketchPicker 
              onChange={(e) => {
                const { onChange } = this.props;
                this.setState({
                  value: `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb.a})`,
                }, () => {
                  const { value } = this.state;
                  onChange(value);
                });
              }}
            /> 
          )
        }
        {
          item.desc && item.desc.map((e, r) => <p key={r}>{e}</p>)
        }
      </div>
    );
  }
}
export default ColorSelect;