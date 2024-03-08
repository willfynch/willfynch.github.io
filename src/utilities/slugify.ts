export function slugify(input: string): string {
    const allowedCharacters = /[a-z0-9-]/g;
    const separator = '-';
  
    return input
      .toLowerCase()
      .trim()
      .replace(/[àáâäæąāăąçćčđďèéêëėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·\/_,:;]/g, '')
      .replace(/\s+/g, separator)
      .replace(/[^a-z0-9-]+/g, '')
      .replace(/-+/g, separator)
      .replace(/^-+|-+$/g, '');
  }