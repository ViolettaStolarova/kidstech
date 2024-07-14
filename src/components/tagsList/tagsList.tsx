import { useCallback, useEffect, useState } from 'react';

import { Tag } from '../../services/api/types';
import getCoursesTags from '../../services/api/getCoursesTags/getCoursesTags';

import TagItem from './components/tagItem/tagItem';

import styles from './tagsList.module.scss';

interface TagsListProps {
  selectedTagId: string;
  setSelectedTagId: (tagId: string) => void;
}

function TagsList(props: TagsListProps) {
  const { selectedTagId, setSelectedTagId } = props;

  const [tags, setTags] = useState<Tag[]>();

  useEffect(() => {
    getCoursesTags().then((data) => setTags(data));
  }, []);

  const handleTagSelect = useCallback(
    (tagId: string) => {
      setSelectedTagId(tagId);
    },
    [setSelectedTagId],
  );

  return (
    <div className={styles.tags_list__container}>
      {tags &&
        tags.map((tag) => (
          <TagItem
            onClick={() => handleTagSelect(tag.id)}
            isSelectedTag={selectedTagId === tag.id}
            key={tag.id}
            tagName={tag.name}
          />
        ))}
    </div>
  );
}

export default TagsList;
