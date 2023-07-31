import React from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { CustomTableProps } from "../types";

const CustomTable: React.FC<CustomTableProps> = ({ headers, rows }) => (
  <Table fontWeight="bold" color="white" variant="simple" fontSize="15px">
    <Thead>
      <Tr>
        {headers.map((header, index) => (
          <Th key={index} textAlign="center" color="white">
            {header}
          </Th>
        ))}
      </Tr>
    </Thead>
    <Tbody>
      {rows.map((row) => (
        <Tr key={row.key}>
          {row.data.map((cell, index) => (
            <Td key={index} textAlign="center">
              {cell}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default CustomTable;
