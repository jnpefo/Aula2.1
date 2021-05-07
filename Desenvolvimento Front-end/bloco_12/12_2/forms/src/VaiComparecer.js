import React from 'react'

class VaiComparecer extends React.Component{
  render(){
    const { value, handleChange } = this.props

    // let erro = undefined;
    // erro = value.length = undefined || value.length < 5  ? 'Escreva algo' : '';
    // erro = value.length > 120 ? 'Texto muito grande!' : '';

    return (
      <label>
        Vai Comparecer  
        <br />
        <input
          type="checkbox"
          name="vaiComparecer"
          value={value}
          onChange={handleChange}
        />
        {/* <span>{ erro }</span>  */}
      </label>
    )
  }
}

export default VaiComparecer
