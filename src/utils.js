export function createPageUrl(pageName) {
  return `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
