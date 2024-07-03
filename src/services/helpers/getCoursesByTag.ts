import { Course } from '../api/getCoursesList/types';

function getCoursesByTag(courses: Course[], tag: string): Course[] {
  const filteredCourses = courses.filter((course) => course.tags.includes(tag));

  return filteredCourses;
}

export default getCoursesByTag;
