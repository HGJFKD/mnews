import { FC } from "react";
import TableMarkup from "./TableMarkup";
import DataTable from "../../types/dataTable.type";


const Table: FC<{ data: DataTable[] }> = ({ data }) => (
    <TableMarkup titles={Object.keys(data[0])} data={data} />
);

export default Table