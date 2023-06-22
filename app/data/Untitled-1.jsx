const trimObjectStrings = (obj: MyObject): MyObject => {
  const result: MyObject = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (typeof value === 'string') {
        const trimmedValue = value.trim();
        result[key] = trimmedValue !== '' ? trimmedValue : '';
      } else {
        result[key] = value;
      }
    }
  }

  return result;