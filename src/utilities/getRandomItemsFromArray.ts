export function getRandomItems(array: any[], number:number) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, number);
  }
  