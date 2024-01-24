import { FC } from "react";
import { DataTable } from "./data";
import TableMarkup from "./TableMarkup";


const Table: FC<{ data: DataTable[] }> = ({ data }) => (
    <TableMarkup titles={Object.keys(data[0])} data={data} />
);

export default Table