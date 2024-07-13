import { useEffect, useState } from 'react';

import { CourseFromServer } from '../../services/api/types';
import getCoursesList from '../../services/api/getCoursesList/getCoursesList';

import CourseCard from './components/courseCard/courseCard';

import styles from './coursesList.module.scss';

interface CoursesListProps {
  selectedTagId: string;
}

function CoursesList(props: CoursesListProps) {
  const { selectedTagId } = props;

  const [courses, setCourses] = useState<CourseFromServer[]>();

  useEffect(() => {
    getCoursesList(selectedTagId).then((arr) => {
      setCourses(arr);
    });
  }, [selectedTagId]);

  return (
    <div className={styles.courses_list__container}>
      {courses && courses.map((course) => <CourseCard key={course.id} course={course} />)}
    </div>
  );
}

export default CoursesList;
