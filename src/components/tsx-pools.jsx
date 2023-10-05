import React, { useState, useEffect } from 'react';
import { StreamrClient } from 'streamr-client';
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

function TransactionPool() {
  const [transactions, setTransactions] = useState([]);

  const streamr = new StreamrClient({
    auth: {
      privateKey: StreamrClient.generateEthereumAccount().privateKey,
    },
  });

  async function subscribeToStreamr() {
    try {
      await streamr.subscribe(
        '0x546A5cB5c0AdD53efbC60000644AA70204B20576/VerxioTransactionPool', 
        (transaction) => {
          // 'transaction' contains the incoming data
          const incomingTransaction = transaction;
          setTransactions((prevTransactions) => [...prevTransactions, incomingTransaction]);
          console.log('Added txn successfully!');
        }
      );
      console.log('Subscribed to Streamr topic');
    } catch (error) {
      console.error('Error subscribing to Streamr:', error);
    }
  }
  


  useEffect(() => {
    async function subscribeToStreamr() {
      try {
        await streamr.subscribe(
          '0x546A5cB5c0AdD53efbC60000644AA70204B20576/VerxioTransactionPool', 
          (transaction) => {
            // 'transaction' contains the incoming data
            const incomingTransaction = transaction;
            setTransactions((prevTransactions) => [...prevTransactions, incomingTransaction]);
            console.log('Added txn successfully!');
          }
        );
        console.log('Subscribed to Streamr topic');
      } catch (error) {
        console.error('Error subscribing to Streamr:', error);
      }
    }

    // Call the async function to subscribe
    subscribeToStreamr();

    return () => {
      streamr.unsubscribe();
    };
  }, []);

  const cellStyles = {
    color: 'white',
  };

  const headerStyles = {
    color: 'magenta',
  };

  return (
    <TableContainer>
      <Table size="lg" variant="striped" colorScheme="black">
        <TableCaption>
          verxio transaction pool powered by{' '}
          <a style={{ color: 'white', textDecoration: 'underline' }} href="https://streamr.network/">
            streamr
          </a>
        </TableCaption>
        <Thead>
          <Tr>
            <Th style={headerStyles}>Txn Hash</Th>
            <Th style={headerStyles}>From</Th>
            <Th style={headerStyles}>To</Th>
            <Th style={headerStyles}>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transaction, index) => (
            <Tr key={index}>
              <Td style={cellStyles}>{transaction.txnHash}</Td>
              <Td style={cellStyles}>{transaction.from}</Td>
              <Td style={cellStyles}>{transaction.to}</Td>
              <Td style={cellStyles}>{transaction.amount}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TransactionPool;
