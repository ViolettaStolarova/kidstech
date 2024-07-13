import { CourseFromServer, Tag } from '../api/types';

function getCoursesUniqueTags(courses: CourseFromServer[]): Tag[] {
  const allTags = courses.flatMap((course) => course.tags);

  const uniqueTags = [...new Set(allTags)];

  const tags = uniqueTags.map((item) => {
    if (typeof item === 'string') {
      return { name: item, id: item };
    }

    return item;
  });

  return tags;
}

export default getCoursesUniqueTags;
