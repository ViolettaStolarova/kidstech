import useTagSelect from '../../shared/hooks/useTagSelect';

import TagsList from '../tagsList/tagsList';
import CoursesList from '../coursesList/coursesList';

import styles from './mainPage.module.scss';

function MainPage() {
  const { selectedTagId, setSelectedTagId } = useTagSelect();

  return (
    <div className={styles.main_page__container}>
      <TagsList selectedTagId={selectedTagId} setSelectedTagId={setSelectedTagId} />
      <CoursesList selectedTagId={selectedTagId} />
    </div>
  );
}

export default MainPage;
