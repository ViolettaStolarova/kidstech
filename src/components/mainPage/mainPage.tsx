import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import useTagSelect from '../../shared/hooks/useTagSelect';

import getCoursesList from '../../services/api/getCoursesList/getCoursesList';
import getCoursesUniqueTags from '../../services/helpers/getCoursesUniqueTags';
import getUrlSearchParams from '../../services/helpers/getUrlSearchParams';
import { Course } from '../../services/api/getCoursesList/types';

import TagsList from './components/tagsList/tagsList';
import CoursesList from './components/coursesList/coursesList';

import styles from './mainPage.module.scss';

function MainPage() {
  const tag = getUrlSearchParams(window.location.href, 'tag');

  const [selectedTag, setSelectedTag] = useTagSelect(tag || '');

  const [tags, setTags] = useState<string[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCoursesList().then((arr) => {
      if (!tags.length) {
        setTags(getCoursesUniqueTags(arr));
      }
    });
  }, [tags.length]);

  useEffect(() => {
    if (selectedTag) {
      getCoursesList(selectedTag as string).then((arr) => {
        setCourses(arr);
      });
    } else {
      getCoursesList().then((arr) => {
        setCourses(arr);
      });
    }
  }, [selectedTag]);

  return (
    <div className={styles.main_page__container}>
      <TagsList tags={tags} onTagSelect={setSelectedTag as Dispatch<SetStateAction<string>>} />
      <CoursesList courses={courses} />
    </div>
  );
}

export default MainPage;
