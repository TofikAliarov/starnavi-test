import React, { useEffect, useState } from "react";
import { SearchBlock } from "./searchBlock/SearchBlock";
import { Cell } from "./cell/Cell";
import { ActiveFieldsList } from "./activeFields/ActiveFieldsList";
import styles from "./Main.module.css";
import classNames from "classnames/bind";

export type IPreset = {
  name: string;
  field: number;
};

const cx = classNames.bind(styles);

export function Main() {
  const [listOfPresets, setListOfPresets] = useState<IPreset[]>([]);
  const [numberOfPresets, setNumberOfPresets] = useState("5");
  const [renderArray, setRenderArray] = useState<string[]>([]);
  const [activeFields, setActiveFields] = useState<string[]>([]);

  const urlOfList = "https://demo7919674.mockable.io/";
  useEffect(() => {
    getListOfPresets();
  }, []);
  useEffect(() => {
    const newArr = [];
    for (let i = 1; i <= Number(numberOfPresets); i++) {
      for (let j = 1; j <= Number(numberOfPresets); j++) {
        newArr.push(` row ${i} col ${j}`);
      }
    }
    setRenderArray(newArr);
    setActiveFields([]);
  }, [numberOfPresets]);

  const getListOfPresets = function () {
    fetch(urlOfList)
      .then((res) => res.json())
      .then((entries) => setListOfPresets(entries));
  };

  const onFieldChoise = function (field: string) {
    setNumberOfPresets(field);
  };
  const onAddActiveCell = function (field: string) {
    setActiveFields([field, ...activeFields]);
  };
  const onRemoveActiveCell = function (field: string) {
    setActiveFields(activeFields.filter((el) => el !== field));
  };

  return (
    <>
      <SearchBlock
        listOfPresets={listOfPresets}
        onFieldChoise={onFieldChoise}
      />
      <div className={cx("block")}>
        <div
          className={cx("grid")}
          style={{
            gridTemplateColumns: `repeat(${numberOfPresets}, auto)`,
            gridTemplateRows: `repeat(${numberOfPresets}, auto)`,
          }}
        >
          {renderArray.map((el: string) => (
            <Cell
              numberOfPresets={numberOfPresets}
              key={el}
              cell={el}
              onAddActiveCell={onAddActiveCell}
              onRemoveActiveCell={onRemoveActiveCell}
            />
          ))}
        </div>
        {<ActiveFieldsList activeFieldsList={activeFields} />}
      </div>
    </>
  );
}
