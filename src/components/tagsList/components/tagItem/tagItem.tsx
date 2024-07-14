import composeClassNames from '../../../../services/helpers/composeClassNames';

import styles from './tagItem.module.scss';

interface TagItemProps {
  tagName: string;
  isSelectedTag: boolean;
  onClick: () => void;
}

function TagItem(props: TagItemProps) {
  const { tagName, isSelectedTag, onClick } = props;

  const tagClassName = composeClassNames(styles.tag_item, { [styles.active]: isSelectedTag });

  return (
    <button className={tagClassName} type="button" onClick={onClick}>
      {tagName}
    </button>
  );
}

export default TagItem;
