interface QueryParams {
  tag?: string;
}

function updateUrl(url: string, queryParams: QueryParams) {
  const currentUrl = new URL(url);

  if (queryParams.tag) {
    currentUrl.searchParams.set('tag', queryParams.tag);
  }

  const queryString = currentUrl.search;

  window.history.pushState({}, '', `${currentUrl.pathname}${queryString}`);
}

export default updateUrl;
