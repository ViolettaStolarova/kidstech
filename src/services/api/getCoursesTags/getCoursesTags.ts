import axios from 'axios';

import { Tag } from '../types';
import BASE_URL from '../constants';
import BASE_TAG from '../../../shared/constants/baseTag';
import getCoursesUniqueTags from '../../helpers/getCoursesUniqueTags';

async function getCoursesTags(): Promise<Tag[]> {
  const response = await axios.get(`${BASE_URL}/courses.json`);

  const tags = getCoursesUniqueTags(response.data);

  return [BASE_TAG, ...tags];
}

export default getCoursesTags;
