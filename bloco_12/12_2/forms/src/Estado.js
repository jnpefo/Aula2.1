import React from "react";
class Estado extends React.Component{
  render(){
    const { value, handleChange } = this.props

    let erro = '';
    if(erro.length < 5){ 
      erro = 'Escreva algo'
     } else if (erro.length > 5 || erro.length > 50){
       erro = ''
     } else {
       erro = 'Texto grande'
     }
    // erro = value.length > 120 ? 'Texto muito grande!' : '';
    // erro = erro.length < 5 ? 'Escreva algo' : '';
    console.log(erro);

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
