function getUrlSearchParam(url: string, searchParam: string): string | null {
  const currentUrl = new URL(url);

  const queryParams = new URLSearchParams(currentUrl.search);

  const param = queryParams.get(searchParam);

  return param;
}

export default getUrlSearchParam;
