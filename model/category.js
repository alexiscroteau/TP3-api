const list = [
  'rpg',
  'fps',
  'mmo',
  'rts',
]

const all = () => {
  return list;
}

const isExist = (category) => {
  return list.includes(category);
}

export default {
  all,
  isExist
};