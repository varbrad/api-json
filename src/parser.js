export const parseDataItem = (included, options) => (item, partial = false) => {
  // Directly copy id & type
  const object = { id: item.id, type: item.type };
  // Replace item from included if needed
  if (partial)
    item = included.find(o => o.id === item.id && o.type === item.type);
  // Iterate thru attributes
  if (item.attributes) {
    Object.entries(item.attributes).forEach(([key, value]) => {
      object[key] = value;
    });
  }
  // Iterate thru relationships
  if (item.relationships) {
    Object.entries(item.relationships).forEach(([key, value]) => {
      object[key] = parseDataItem(included, options)(value.data, true);
    });
  }

  return object;
};

export default (jsonApiObject, options = {}) => {
  const { data, included } = jsonApiObject;

  const parser = parseDataItem(included, options);
  const newData = Array.isArray(data) ? data.map(parser) : parser(data);

  return newData;
};
