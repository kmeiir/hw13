import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function InsurProduct({
  id,
  name,
  category,
  price,
  description,
  liked,
  onToggleLike,
}) {
  return (
    <div className="insurance">
      <div className="ins_id">{id}</div>
      <div className="ins_name">{name}</div>
      <div className="category">{category}</div>

      <div className="price">
        {price}{" "}
        <button className="like_btn" type="button" onClick={onToggleLike}>
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <div className="description">{description}</div>
    </div>
  );
}