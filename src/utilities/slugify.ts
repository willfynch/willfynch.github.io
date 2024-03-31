export function slugify(input: string | undefined): string {
    const allowedCharacters = /[a-z0-9-]/g;
    const separator = '-';
    let slug;
    try {
      slug = input!
      .toLowerCase()
      .trim()
      .replace(/[àáâäæąāăąçćčđďèéêëėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·\/_,:;]/g, '')
      .replace(/\s+/g, separator)
      .replace(/[^a-z0-9-]+/g, '')
      .replace(/-+/g, separator)
      .replace(/^-+|-+$/g, '');
    }
    catch(error){
      throw new SlugifyError("An error occurred with slugify function Impossible to slugify the content title which was " + input)
    }
    return slug
  }

export class SlugifyError extends Error {
  constructor(message: string){
    super(message)
    this.name = 'SlugifyError'
  }
}