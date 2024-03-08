export function calculateReadingTime(content: string, averageReadingTimePerWord: number): number {
    const wordCount = content.trim().split(/\s+/).length;
    const totalReadingTimeInSeconds = wordCount * averageReadingTimePerWord;
    const totalReadingTimeInMinutes = Math.ceil(totalReadingTimeInSeconds / 60);
    return totalReadingTimeInMinutes;
}