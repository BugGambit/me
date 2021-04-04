export default function staticFileUrl(absolutePath: string): string {
  return process.env.PUBLIC_URL + absolutePath;
}