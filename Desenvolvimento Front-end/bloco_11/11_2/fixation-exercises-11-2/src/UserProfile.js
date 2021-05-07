import React from 'react';

class UserProfile extends React.Component {
  render() {
    const { user: { id, name, email, avatar } } = this.props
    

    return (
      <div>
        <p>{ id }</p>
        <p>{ name }</p>
        <p>{ email }</p>
        <img src={ avatar } alt="teste" />
      </div>
    );
  }
}

export default UserProfile;
