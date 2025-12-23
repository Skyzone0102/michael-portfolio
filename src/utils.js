export function createPageUrl(pageName) {
  return `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const tagThemes = {
  'Design': { primary: '#6DD58C', onPrimary: '#0A3818' },
  'Computer Vision': { primary: '#D0BCFF', onPrimary: '#381E72' },
  'Sensors': { primary: '#FFB784', onPrimary: '#4F2500' },
  // 'Sensors': { primary: '#4FD8EB', onPrimary: '#00363D' },
  'Mechatronics': { primary: '#DCC48C', onPrimary: '#3E2E04' },
  // 'Computer vision': { primary: '#A8C7FA', onPrimary: '#062E6F' },
  // 'Design': { primary: '#FFB4D1', onPrimary: '#4A1429' }
};
