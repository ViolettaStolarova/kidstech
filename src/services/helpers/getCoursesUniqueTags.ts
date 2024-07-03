import { Course } from '../api/getCoursesList/types';

function getCoursesUniqueTags(courses: Course[]): string[] {
  const allTags = courses.flatMap((course) => course.tags);

  const uniqueTags = [...new Set(allTags)];

  return uniqueTags;
}

export default getCoursesUniqueTags;
