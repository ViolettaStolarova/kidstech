type Mods = Record<string, boolean | string | undefined>;

function composeClassNames(
  cls: string,
  mods: Mods = {},
  additional: string[] | undefined = [],
): string {
  const modClasses = Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([className]) => String(className));

  const classes = [cls, ...modClasses, ...additional.filter(Boolean)].join(' ');

  return classes;
}

export default composeClassNames;
