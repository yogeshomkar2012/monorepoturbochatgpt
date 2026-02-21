export const getInitials = (name) => {
  if (!name) return '??';
  return name
    .split(' ')
    .filter(Boolean)
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};
