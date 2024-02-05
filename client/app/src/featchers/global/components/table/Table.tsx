import { FC, useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";

import DataTable from "../../types/dataTable.type";
import StyledTable, { Td, Th } from "../../styledComponents/table/table.style";
import LoadingAnimation from "../Loading";

interface TableProps {
    data: DataTable[],
    handleClick: (item: any) => void
}

const Table: FC<TableProps> = ({ data, handleClick }) => {

    const isAdmin: boolean = true

    const [titles, setTitles] = useState<string[]>([''])

    useEffect(() => {
        const preparingTitles = (isAdmin: boolean) => {
            const titles = Object.keys(data[0])
            if (!isAdmin) return titles
            titles.push('edit', 'delete')
            return titles
        }
        const titles = preparingTitles(isAdmin)
        setTitles(titles)
    })

    const onClick = (e: any, item: any) => { handleClick(item) }

    return (
       <> 
            <StyledTable>
                <thead>
                    <tr>
                        {titles.map((title, index) => (
                            <Th key={index}>{title}</Th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            {titles.map((title, index) => {
                                if (title === 'id')
                                    return <Td bold={true.toString()} key={index}>{item[title]}</Td>
                                if (title === 'edit') return <Td key={index} onClick={(e) => onClick(e, item)}>{<span><MdModeEdit style={{ color: '#ce00f4' }} /></span>}</Td>
                                if (title === 'delete') return <Td key={index}>{<span><RiDeleteBin7Fill style={{ color: '#ce00f4' }} /></span>}</Td>
                                return <Td key={index}>{item[title]}</Td>

                            })}
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </>
    )
};

export default Table