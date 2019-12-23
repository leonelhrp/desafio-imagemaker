import React from 'react';
// Aprende más del Avatar en: http://gravatar.com
function Avatar(props) {
  return (
    <div>
      <img
        className={props.className}
        src={`${props.image}`}
        alt="Avatar"
      />
    </div>
  );
}

export default Avatar;
