import { CourseFromServer } from '../api/types';

function getCoursesByTag(courses: CourseFromServer[], tagId: string): CourseFromServer[] {
  const filteredCourses = courses.filter((course) => course.tags.includes(tagId));

  return filteredCourses;
}

export default getCoursesByTag;
