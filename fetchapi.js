// fetching data from api
export default async function fetchapi(searchtext) {
    const url = `https://pixabay.com/api/videos/?key=16951368-5c8d3e4394fb6f1965469ab5f&q=${searchtext}&pretty=true`
    const response = await fetch(url)
    const results = await response.json()
    return results
}