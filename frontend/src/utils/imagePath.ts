// Утиліта для правильних шляхів до зображень на GitHub Pages
export const getImagePath = (imageName: string): string => {
  const baseUrl = import.meta.env.BASE_URL || '';
  return `${baseUrl}${imageName}`;
}; 