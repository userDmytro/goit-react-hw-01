import css from "../FriendListItem/FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="70" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(
          css.statys,
          isOnline === true ? css.online : css.offline
        )}>
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
}
