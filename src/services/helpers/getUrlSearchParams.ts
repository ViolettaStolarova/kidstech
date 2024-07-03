function getUrlSearchParams(url: string, searchParams: string) {
  const currentUrl = new URL(url);

  const queryParams = new URLSearchParams(currentUrl.search);

  const searchParam = queryParams.get(searchParams);

  return searchParam;
}

export default getUrlSearchParams;
