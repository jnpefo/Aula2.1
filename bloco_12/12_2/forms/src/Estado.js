import React from "react";
class Estado extends React.Component{
  render(){
    const { value, handleChange } = this.props

    let erro = '';
    if(value.length < 5){ 
      erro = 'Escreva algo'
    } else if (value.length > 50 ){
      erro = 'Texto grande'
    }
    // erro = value.length < 5 ? 'Escreva algo' : '';
    // erro = value.length > 120 ? 'Texto muito grande!' : erro;

    return (
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <br />
        <textarea 
          name="estadoFavorito" 
          value={value}
          onChange={handleChange}
        />
        <span>{ erro }</span> 
      </label>
    )
  }
}

export default Estado
