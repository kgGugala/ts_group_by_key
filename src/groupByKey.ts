type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const keyValue = item[key];

    if (!((keyValue as unknown as string) in result)) {
      result[keyValue as unknown as string] = [];
    }
  }

  for (const item of items) {
    const keyValue = item[key];

    result[keyValue as unknown as string].push(item);
  }

  return result;
}
