function deleteUrlSearchParam(url: string, paramName: string): void {
  const currentUrl = new URL(url);
  currentUrl.searchParams.delete(paramName);

  window.history.replaceState({}, '', currentUrl);
}

export default deleteUrlSearchParam;
