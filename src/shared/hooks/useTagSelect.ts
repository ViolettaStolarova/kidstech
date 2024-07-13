import { useEffect, useState } from 'react';

import BASE_TAG from '../constants/baseTag';
import setUrlSearchParam from '../../services/helpers/setUrlSearchParam';
import deleteUrlSearchParam from '../../services/helpers/deleteUrlSearchParam';
import getUrlSearchParam from '../../services/helpers/getUrlSearchParam';

function useTagSelect() {
  const tagIdFromUrl = getUrlSearchParam(window.location.href, 'tag');

  const [selectedTagId, setSelectedTagId] = useState<string>(tagIdFromUrl || BASE_TAG.id);

  useEffect(() => {
    deleteUrlSearchParam(window.location.href, selectedTagId);
    setUrlSearchParam(window.location.href, selectedTagId);
  }, [selectedTagId]);

  return { selectedTagId, setSelectedTagId };
}

export default useTagSelect;
