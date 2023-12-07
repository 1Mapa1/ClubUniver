import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { Button, Img, List, Text, LetterLast , Card} from "components";

const options = [
  { value: 'monday', label: 'Понедельник' },
  { value: 'tuesday', label: 'Вторник' },
  { value: 'wednesday', label: 'Среда' },
  { value: 'thursday', label: 'Четверг' },
  { value: 'friday', label: 'Пятница' },
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  head: {
    backgroundColor: theme.palette.grey[300] || '#e0e0e0',
    fontWeight: 'bold',
    borderRadius: '8px 8px 0 0',
  },
  body: {
    borderRadius: '0 0 8px 8px',
  },
}));


const Login_table = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const data = [
    { id: 1, number: 1, classroom: '201', start: '12:00', end: '15:00' },
    { id: 2, number: 2, classroom: '505', start: '11:00', end: '18:00' },
    // Добавьте другие строки данных, если необходимо
  ];

  return (
    <>
    <div className="bg-grey-bg font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
        <div className="font-inter flex items-center justify-center h-[100vh]  max-w-[1360px] mx-auto w-full z-[1] body-login">
          <header className="absolute flex inset-x-[0] items-center justify-center mx-auto top-[0]">
            <div className="bg-white-A700 grid flex-row sm:gap-10 items-center justify-center p-5 rounded-bl-[20px] rounded-br-[20px] header-block">
              <Img
                className="mb-[9px] ml-1.5 sm:ml-[0] object-cover img-logo"
                src="images/img_image1.png"
                alt="imageOne"
              />
              <Text
                className="text-light_blue-800 text-logo"
                size="txtInterSemiBold20"
              >
                Клубы по интересам
              </Text>
            </div>
          </header>

          <main className="main-block mt-10">
            <div className="login-box-table w-[600px] sm:w-[100%] px-[40px] py-[20px] sm:px-[20px]" >
              <Select
                id="dropdown"
                options={options}
                value={selectedOption}
                onChange={handleChange}
                className='w-[200px]'
              />
              <TableContainer component={Paper} style={{ borderRadius: '8px', overflow: 'hidden' }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell>Аудитория</StyledTableCell>
            <StyledTableCell>Начало</StyledTableCell>
            <StyledTableCell>Конец</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell>{row.number}</StyledTableCell>
              <StyledTableCell>{row.classroom}</StyledTableCell>
              <StyledTableCell>{row.start}</StyledTableCell>
              <StyledTableCell>{row.end}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
          </main>
        </div>
    </div>
    </>);
  
}

export default Login_table;