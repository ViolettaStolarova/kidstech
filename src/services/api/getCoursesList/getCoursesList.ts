import axios from 'axios';

import { CourseFromServer } from '../types';
import BASE_URL from '../constants';
import BASE_TAG from '../../../shared/constants/baseTag';
import getCoursesByTag from '../../helpers/getCoursesByTag';

async function getCoursesList(tagId?: string): Promise<CourseFromServer[]> {
  const response = await axios.get(`${BASE_URL}/courses.json`);

  const allCourses = response.data;

  if (tagId && tagId !== BASE_TAG.id) {
    const filteredCourses = getCoursesByTag(allCourses, tagId);

    return filteredCourses;
  }

  return allCourses;
}

export default getCoursesList;
