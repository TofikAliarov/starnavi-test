import React from "react";
import styles from './ActiveFieldsList.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type IActiveFieldsList = {
  activeFieldsList: string[];
};

export function ActiveFieldsList({ activeFieldsList }: IActiveFieldsList) {
  return (
    <div className={cx("active__fields")}>
      <h2 className={cx("active__fields-title")}>Hover squares</h2>

      <ul className={cx("active__fields-list")}>
        {activeFieldsList.map((el) => (
          <li className={cx("active__fields-element")} key={el}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
