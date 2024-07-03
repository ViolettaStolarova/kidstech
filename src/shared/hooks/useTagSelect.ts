import { useEffect, useState } from 'react';
import updateUrl from '../../services/helpers/updateUrl';

function useTagSelect(tag?: string) {
  const [selectedTag, setSelectedTag] = useState<string>(tag || '');

  useEffect(() => {
    if (tag) {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete('tag');

      window.history.replaceState({}, '', currentUrl);
    }

    updateUrl(window.location.href, { tag: selectedTag });
  }, [selectedTag, tag]);

  return [selectedTag, setSelectedTag];
}

export default useTagSelect;
