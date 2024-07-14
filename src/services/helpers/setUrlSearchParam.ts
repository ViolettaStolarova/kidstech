function setUrlSearchParam(url: string, queryParam: string): void {
  const currentUrl = new URL(url);

  if (queryParam) {
    currentUrl.searchParams.set('tag', queryParam);
  }

  const queryString = currentUrl.search;

  window.history.pushState({}, '', `${currentUrl.pathname}${queryString}`);
}

export default setUrlSearchParam;
