
const Avatar = ({ imageUrl = require('./avatar.png'), altText="User Avatar" }) => {
  return (
    <div className="avatar">
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default Avatar;
