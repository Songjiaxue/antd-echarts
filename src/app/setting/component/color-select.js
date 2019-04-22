import React from 'react';
import { SketchPicker } from 'react-color';

class ColorSelect extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render () {
    const { show } = this.state;
    const { title, desc } = this.props;
    return (
      <div className="group-item">
        <span className="label">{title}：</span>
        <span 
          className="color-block"
          onClick={() => {
            this.setState({
              show: !show,
            });
          }}
        />
        {
          show && (
            <SketchPicker 
              onChange={(e) => {
                const { onChange } = this.props;
                onChange(e);
              }}
            /> 
          )
        }
        {
          desc && desc.map((e, r) => <p key={r}>{e}</p>)
        }
      </div>
    );
  }
}
export default ColorSelect;