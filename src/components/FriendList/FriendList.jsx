import FriendListItem from "../FriendListItem/FriendListItem";
import css from "../FriendList/FriendList.module.css"

export default function FriendList({ friends }) {
  return (
    <ul className={css.phather}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.childrenLi}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
