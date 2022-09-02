import React, { useEffect, useState } from "react";
import styles from "./Cell.module.css";
import classNames from "classnames/bind";

type ICell = {
  numberOfPresets:string;
  cell: string;
  onAddActiveCell: (field: string) => void;
  onRemoveActiveCell: (field: string) => void;
};

const cx = classNames.bind(styles);

export function Cell({ cell,numberOfPresets, onAddActiveCell, onRemoveActiveCell }: ICell) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    
    setIsActive(false);
  }, [numberOfPresets]);

  const onEnterCell = function () {
    if (isActive === false) {
      onAddActiveCell(cell);
    } else {
      onRemoveActiveCell(cell);
    }
    setIsActive(!isActive);
  };

  return (
    <div
      onMouseEnter={onEnterCell}
      className={isActive ? cx("cell-active") : cx("cell")}
    ></div>
  );
}
