import React from 'react';
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'; 

function TransactionPool() {
    const cellStyles = {
        color: 'white',
      };

      const headerStyles = {
        color: 'magenta',
      };

  return (
    <TableContainer>
      <Table size='lg' variant='striped' colorScheme='black' >
        <TableCaption>verxio transaction pool powered by <a 
         style={{ color: 'white', textDecoration: 'underline' }}
         href='https://streamr.network/'>
            streamr</a></TableCaption>
        <Thead>
          <Tr>
            <Th style={headerStyles}>To convert</Th>
            <Th style={headerStyles}>into</Th>
            <Th style={headerStyles} isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
        <Tr>
        <Td style={cellStyles}>inches</Td>
        <Td style={cellStyles}>millimetres (mm)</Td>
        <Td style={cellStyles} isNumeric>25.4</Td>
      </Tr>
          <Tr>
            <Td style={cellStyles}>feet</Td>
            <Td style={cellStyles}>centimetres (cm)</Td>
            <Td style={cellStyles} isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td style={cellStyles}>yards</Td>
            <Td style={cellStyles}>metres (m)</Td>
            <Td style={cellStyles} isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TransactionPool;
