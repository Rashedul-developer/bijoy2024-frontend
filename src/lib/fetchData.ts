export default async function fetchData(url: string) {
    const data = await fetch(url);
    return data?.json();
}