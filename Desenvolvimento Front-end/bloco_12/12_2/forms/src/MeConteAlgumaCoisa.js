import React from 'react'

class MeConteAlgumaCoisa extends React.Component{
  render() {
    const { value, handleChange } = this.props
    return (
      <label>
        Me conte alguma coisa! =)
        <br />
        <textarea 
          name="meConteAlgo"  
          value={value} 
          onChange={handleChange} 
        />
      </label>
    )
  }
}

export default MeConteAlgumaCoisa
