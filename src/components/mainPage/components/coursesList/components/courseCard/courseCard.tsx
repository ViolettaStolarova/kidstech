import { Course } from '../../../../../../services/api/getCoursesList/types';

import styles from './courseCard.module.scss';

interface CourseCardProps {
  course: Course;
}

function CourseCard(props: CourseCardProps) {
  const { course } = props;

  return (
    <div className={styles.course_card}>
      <div
        style={{
          backgroundColor: `${course.bgColor}`,
        }}
        className={styles.card_img__container}
      >
        <img className={styles.card_img} alt={`${course.name}`} src={course.image} />
      </div>
      <div className={styles.card_title__container}>{course.name}</div>
    </div>
  );
}

export default CourseCard;
