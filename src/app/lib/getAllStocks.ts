export default async function getAllStocks(sgStock:string) {

  try {
    const res = await fetch(`https://www.okanebox.com.br/api/acoes/hist/${sgStock}/20190709/20200709/`);
    console.log('NEW FETCH');
    if(!res) return undefined
    return res.json()
  } catch (error) {
    console.log(`${error}`);
    ('');
  }
}