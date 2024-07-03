/* eslint-disable react/no-array-index-key */
import { Dispatch, useEffect } from 'react';

import useTagSelect from '../../../../shared/hooks/useTagSelect';

import TagItem from './components/tagItem';

import styles from './tagsList.module.scss';
import getUrlSearchParams from '../../../../services/helpers/getUrlSearchParams';

interface BaseTag {
  tagName: string;
  tagSelectParam: string;
}

const BASE_TAG: BaseTag = { tagName: 'Все темы', tagSelectParam: '' };

interface TagsListProps {
  tags: string[];
  onTagSelect: (tagName: string) => void;
}

function TagsList(props: TagsListProps) {
  const tag = getUrlSearchParams(window.location.href, 'tag');
  const { tags, onTagSelect } = props;

  const [selectedTag, setSelectedTag] = useTagSelect() as [
    string,
    Dispatch<React.SetStateAction<string>>,
  ];

  useEffect(() => {
    if (tag) {
      setSelectedTag(tag);
    }
  }, [setSelectedTag, tag]);

  const handleTagSelect = (tagName: string) => {
    setSelectedTag(tagName);
    onTagSelect(tagName);
  };

  return (
    <div className={styles.tags_list__container}>
      <TagItem
        onClick={() => handleTagSelect(BASE_TAG.tagSelectParam)}
        isSelectedTag={selectedTag === BASE_TAG.tagSelectParam}
        tagName={BASE_TAG.tagName}
      />
      {tags.map((tagName, index) => (
        <TagItem
          onClick={() => handleTagSelect(tagName)}
          isSelectedTag={selectedTag === tagName}
          key={index}
          tagName={tagName}
        />
      ))}
    </div>
  );
}

export default TagsList;
