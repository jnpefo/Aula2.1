import React from "react"

class Idade extends React.Component{
  render(){
    const { value, handleChange } = this.props
    return(
      <input
        type="number"
        name="idade"
        value={value}
        onChange={handleChange}
      />
    )
  }
}

export default Idade
