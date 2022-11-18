export async function getApiJson() {
    const ret = await fetch('https://gitconnected.com/v1/portfolio/aungheinhtoo');
    const res = await ret.json();
    return res;
}