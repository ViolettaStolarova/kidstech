import styles from './tagItem.module.scss';

interface TagItemProps {
  tagName: string;
  isSelectedTag: boolean;
  onClick: () => void;
}

function TagItem(props: TagItemProps) {
  const { tagName, isSelectedTag, onClick } = props;

  const tagClassName = `${styles.tag_item} ${isSelectedTag ? styles.active : ''}`;

  return (
    <button className={tagClassName} type="button" onClick={onClick}>
      {tagName}
    </button>
  );
}

export default TagItem;
