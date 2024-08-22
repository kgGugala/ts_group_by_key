type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const keyValue = item[key];

    if (!((keyValue as string) in result)) {
      result[keyValue as string] = [];
    }
    result[keyValue as string].push(item);
  }

  return result;
}
