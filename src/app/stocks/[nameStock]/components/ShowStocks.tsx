import DateFormating from "@/app/stocks/[nameStock]/components/DateFormating";

type Props = {
    promise: Stock[]
  };

const ShowStocks: React.FC <Props> = async ({promise}) => {
  return (
    <table className="border-2">
        <thead>
            <tr className="gap-2">
                <th>DATA</th>
                <th>VR. TOTAL</th>
                <th>PR. ABE</th>
                <th>PR. MAX</th>
                <th>PR. MIN</th>
                <th>PR. MED</th>
                <th>PR. ULT</th>
                <th>QT. TOT</th>
                <th>VOL TOT</th>
            </tr>
        </thead>
        <tbody className="">
            {promise.map((data, index) => (
                <tr key={index} className="border-2 m-2">
                    <td><DateFormating dateString={data.DATPRG}/></td>
                    <td>{(data.PREULT - data.PREABE)}</td>
                    <td>{data.PREABE}</td>
                    <td>{data.PREMAX}</td>
                    <td>{data.PREMIN}</td>
                    <td>{data.PREMED}</td>
                    <td>{data.PREULT}</td>
                    <td>{data.QUATOT}</td>
                    <td>{data.VOLTOT}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
}
export default ShowStocks