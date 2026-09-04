import { useState } from "react";
import Cell from "./components/cell/Cell";
import "./app.css";
import CellTn from "./components/cellTn/CellTn";
import CellF from "./components/cellF/CellF";
import CellTn2 from "./components/cellTn2/CellTn2";
import CellF2 from "./components/cellF2/CellF2";
import CellSmv from "./components/cellSmv/CellSmv";
import Button from "./components/button/Button";
import Modal from "react-modal";
import dataDefaultStateForCells from "./dataDefaultStateForCells.json";
import dataDefaultStateForCells00 from "./dataDefaultStateForCells00.json";

const config = [
  {
    title: "1 секция",
    cells: [
      {
        id: 2,
        number: 2,
        name: "Резерв",
        inf1: null,
        inf2: null,
        // обязательно добавить тип ячейки: type: ""
        // хранить ли старт состояние оборудования ячейки?!
        devices: [
          {
            name: "ВВ",
            num: 1,
            dwo: "W",
            location: "vv",
            isActive: false,
          },
        ],
      },
    ],
  },
  {
    title: "2 секция",
    cells: [],
  },
];

const App = () => {
  const [typeSchema, setTypeSchema] = useState("normal"); // normal | off
  const [statusDevicesCells, setStatusDevicesCells] = useState(() =>
    typeSchema === "normal"
      ? dataDefaultStateForCells
      : dataDefaultStateForCells00,
  );
  const [isOpenModal, setIsOpenModal] = useState(false);

  /* 
  
  cellNumber - номер ячейки
   location - название оборудования при клике
   status - статус оборудования после клика

  */

  const handleToggleDevice = ({ cellNumber, location, status }) => {
    if (statusDevicesCells[cellNumber][location] === null) {
      return;
    }

    console.log(cellNumber, location, status);

    setStatusDevicesCells({
      ...statusDevicesCells,
      [cellNumber]: {
        ...statusDevicesCells[cellNumber],
        [location]: status,
      },
    });
  };

  const customStylesForModal = {
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "560px",
      height: "140px",
    },
  };

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        style={customStylesForModal}
        appElement={document.getElementById("root")}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button handler={() => setIsOpenModal(false)} use={""}>
            X
          </Button>
        </div>
        <div>
          Электрическая схема с интерактивными элементами для ПК и мобильных
          устройств. Полезна для инструктажей, наглядной демонстрации и анализа
          порядка переключений.
        </div>
      </Modal>
      <div className="app__buttons">
        <Button handler={() => setIsOpenModal(true)} use={"primary"}>
          О схеме?
        </Button>
        <Button
          handler={() => {
            setStatusDevicesCells(dataDefaultStateForCells00);
            setTypeSchema("off");
          }}
          use={typeSchema === "off" ? "success" : "primary"}
        >
          Схема РП
        </Button>
        <Button
          handler={() => {
            setStatusDevicesCells(dataDefaultStateForCells);
            setTypeSchema("normal");
          }}
          use={typeSchema === "normal" ? "success" : "primary"}
        >
          "Нормальная схема" РП
        </Button>
      </div>

      <h1 className="app__title1">РП - 6 (РУ - 10 кВ)</h1>

      <div className="app__title2">1 секция</div>

      <div className="app__sec1">
        <Cell
          key={1}
          number={1}
          name={"КТП-18"}
          inf1={"Т-1"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[1]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={2}
          number={2}
          name={"КТП-23"}
          inf1={"Т-2"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[2]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={3}
          number={3}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[3]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={4}
          number={4}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[4]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={5}
          number={5}
          name={"КТП-24"}
          inf1={"Т-1"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[5]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={6}
          number={6}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[6]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={7}
          number={7}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[7]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={8}
          number={8}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[8]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={9}
          number={9}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[9]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={10}
          number={10}
          name={"Ввод-1"}
          inf1={"от яч.5"}
          inf2={"РП-16128"}
          devicesStatus={statusDevicesCells[10]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <CellF
          key={11}
          number={11}
          name={"Каб. ввод-1"}
          inf1={"от яч.5"}
          inf2={"РП-16128"}
          devicesStatus={statusDevicesCells[11]}
          handleToggleDevice={handleToggleDevice}
        ></CellF>
        <CellTn2
          key={12}
          number={12}
          name={"ТН - 1сш,"}
          inf1={"ЗР - 1сш"}
          inf2={""}
          devicesStatus={statusDevicesCells[12]}
          handleToggleDevice={handleToggleDevice}
        ></CellTn2>
        <CellSmv
          key={13}
          number={13}
          name={"СМВ"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[13]}
          handleToggleDevice={handleToggleDevice}
        ></CellSmv>
        <CellTn
          key={14}
          number={14}
          name={"ТН - 2сш,"}
          inf1={"ЗН - 2сш,"}
          inf2={"СР, ЗН СР"}
          devicesStatus={statusDevicesCells[14]}
          handleToggleDevice={handleToggleDevice}
        ></CellTn>
      </div>
      <div className="app__title3">2 секция</div>
      <div className="app__sec2">
        <Cell
          key={30}
          number={30}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[30]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={29}
          number={29}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[29]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={28}
          number={28}
          name={"ТП-25"}
          inf1={"1000 кВА"}
          inf2={""}
          devicesStatus={statusDevicesCells[28]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={27}
          number={27}
          name={"КТП-23"}
          inf1={"Т-1"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[27]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={26}
          number={26}
          name={"КТП-24"}
          inf1={"Т-2"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[26]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={25}
          number={25}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[25]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={24}
          number={24}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[24]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={23}
          number={23}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[23]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={22}
          number={22}
          name={"ТП-ЭВП"}
          inf1={"1000 кВА"}
          inf2={""}
          devicesStatus={statusDevicesCells[22]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={21}
          number={21}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[21]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={20}
          number={20}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[20]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={19}
          number={19}
          name={"КТП-18"}
          inf1={"Т-2"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[19]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={18}
          number={18}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[18]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={17}
          number={17}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[17]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <CellF2
          key={16}
          number={16}
          name={"Каб. ввод-2"}
          inf1={"от яч.6"}
          inf2={"РП-16128"}
          devicesStatus={statusDevicesCells[16]}
          handleToggleDevice={handleToggleDevice}
        ></CellF2>
        <Cell
          key={15}
          number={15}
          name={"Ввод-2"}
          inf1={"от яч.6"}
          inf2={"РП-16128"}
          devicesStatus={statusDevicesCells[15]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
      </div>
    </>
  );
};

export default App;

/* 

ДЗ:
облагородить строчку 35 (создать компонент tarifsList) и прокидывать данные туда
создать компонент карточка тарифа "TarifCard"
внутри карточки отображать id title компонент counter(должен начинаться с number)

*/
