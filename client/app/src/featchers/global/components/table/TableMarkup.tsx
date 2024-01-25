import { FC } from "react";
import StyledTable from "../../styledComponents/table/table.style";
import DataTable from "../../types/dataTable.type";

const TableMarkup: FC<{ data: DataTable[], titles: string[] }> = ({ titles, data }) => (
    <StyledTable>
        <thead>
            <tr>
                {titles.map((title, index) => (
                    <th key={index}>{title}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    {titles.map((title, index) => (
                        <td key={index}>{item[title]}</td>
                    ))}
                </tr>
            ))}
        </tbody>

    </StyledTable>
);


export default TableMarkup