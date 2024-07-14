/* eslint-disable react/no-array-index-key */
import { Course } from '../../../../services/api/getCoursesList/types';

import CourseCard from './components/courseCard/courseCard';

import styles from './coursesList.module.scss';

interface CoursesListProps {
  courses: Course[];
}

function CoursesList(props: CoursesListProps) {
  const { courses } = props;

  return (
    <div className={styles.courses_list__container}>
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default CoursesList;
