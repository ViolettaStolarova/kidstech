import axios, { AxiosResponse } from 'axios';
import BASE_URL from '../constants';
import getCoursesByTag from '../../helpers/getCoursesByTag';
import { Course } from './types';

async function getCoursesList(tag?: string): Promise<Course[]> {
  const response = (await axios.get(`${BASE_URL}/courses.json`)) as AxiosResponse;

  const allCourses = response.data;

  if (tag) {
    const filteredCourses = getCoursesByTag(allCourses, tag);

    return filteredCourses;
  }

  return allCourses;
}

export default getCoursesList;
