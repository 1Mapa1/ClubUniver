import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { Button, Img, List, Text, LetterLast , Card} from "components";
import { loadFreeTime } from 'repo/loadFreeTime';

const options = [
  { value: 1, label: 'Понедельник' },
  { value: 2, label: 'Вторник' },
  { value: 3, label: 'Среда' },
  { value: 4, label: 'Четверг' },
  { value: 5, label: 'Пятница' },
];

const ColorOption = ({ value, selected, onSelect, last }) => {
  const backgroundColor = selected ? 'rgba(0, 118, 187, 0.103)' : 'white';
  const borderStyle = selected ? '2px solid rgb(0, 118, 187)' : '1px solid rgba(0, 0, 0, 0.5)';
  let borderStyleRight = selected ? '2px solid rgb(0, 118, 187)' : 'none';
  
  if (last) {
    borderStyleRight = selected ? '2px solid rgb(0, 118, 187)' : '1px solid rgba(0, 0, 0, 0.5)';
  }

  return (
    <td
    style={{ backgroundColor, cursor: 'pointer', border: borderStyle, borderRight: borderStyleRight }}
    onClick={() => onSelect(value)}
    className='text-xs text-time'
  >
    {value} ч.
  </td>
  );
};

const Login_table = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOptionNumber, setSelectedOptionNumber] = useState(null);
  const [optionsNumber, setOptionsNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [bigData, setBigData] = useState(null);
  const [data, setData] = useState([]);

  const loadBigdata = async () => {
    // Тут вызывается ваша функция для получения данных
    const result = await loadFreeTime();
    setBigData(result);
    setData(result[0].schedule_entries)
  };

  useEffect(() => {
    loadBigdata();
  }, []);

  useEffect(() => {
    setSelectedOptionNumber(null);
  }, [optionsNumber]);

  const handleChange = async (selected) => {
    console.log(selected)
    console.log(selectedOption)
    setSelectedOption(selected);
    
    const selectedDay = selected.value;
    
    let newData = [];
    switch (selectedDay) {
      case 1:
        newData = bigData[0].schedule_entries
        break;
      case 2:
        newData = bigData[1].schedule_entries
        break;
    }
    newData.map((row) => {
      row.isSelected = false;
    })
    
    setData(newData);
  };

  const handleSelect = (value) => {
    setSelectedOptionNumber(value);
  };

  

  const swapSelected = (code) => {
    
    setData(prevData =>
      prevData.map((item, index) => {
        if (index === code) {
          if (!item.isSelected) {
            let numbers = [];
            for (let i = 0; i < parseInt(item.end_time) - parseInt(item.starting_time); i++) {
              numbers.push(i + 1);
            }
            setSelectedOptionNumber(null);
            setOptionsNumber(numbers);
          }
          
          return { ...item, isSelected: !item.isSelected };
        }
        return { ...item, isSelected: false };
      })
    );
  };

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
            <div className="login-box-table sm:w-[100%] px-[40px] py-[20px] sm:px-[0px]" >
              <Select
                id="dropdown"
                options={options}
                value={selectedOption}
                onChange={handleChange}
                className='w-[200px] mb-[20px] sm:ml-[20px]'
              />
              <table className='table-res h-[422px] sm:max-w-[457px] md:mx-auto md:max-w-[571px]'>
                <thead>
                  <tr>
                      <th rowSpan={2} className='table-th-left px-[20px] md:px-[15px] sm:px-[10px]'>
                        №
                      </th>
                      <th rowSpan={2} className='border-t-0 md:px-[50px] sm:px-[30px]'>
                        Расположение
                      </th>
                      <th colSpan="2" className='table-th-right'>Доступное время</th>
                  </tr>
                  <tr>
                    <th className='px-[80px] md:px-[50px] sm:px-[20px]'>Начало</th>
                    <th className='border-r-0 px-[80px] md:px-[50px] sm:px-[20px]'>Конец</th>
                  </tr>
                </thead>
                <tbody>
                  { data.map((row, index) => (
                    <tr key={row.id} onClick={() => swapSelected(index)} className={row.isSelected ? "select-row" : ""}>
                      <td className={'border-l-0 '}>{index + 1}</td>
                      <td className=''>{row.location}</td>
                      <td className=''>{row.starting_time}:00</td>
                      <td className='border-r-0'>{row.end_time}:00</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className='flex flex-row justify-between mt-[20px] items-end fotter-block'>
                  <div className='sm:items-center sm:flex sm:flex-col '>
                    <p className='text-xs text-zinc-400'>На сколько вы хотите забронировать?</p>
                    <table className='max-w-max botoom-table mt-[10px]'>
                      <tr>
                      {optionsNumber.map((option, index, array) => (
                        <ColorOption
                          key={option}
                          value={option}
                          selected={option === selectedOptionNumber}
                          onSelect={handleSelect}
                          last = {index === array.length - 1}
                        />
                      ))}
                      </tr>
                    </table>


                  </div>
                  <Button type="submit" className="cursor-pointer font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]" variant="blue">
                    Забронировать
                  </Button>
              </div>

            </div>
          </main>
        </div>
    </div>
    </>);
  
}

export default Login_table;