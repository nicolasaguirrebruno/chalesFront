import { CaretDown } from "phosphor-react";
import React, { useState } from "react";

export const AccordionItem = ({ question }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`${show ? "item item--active" : "item"}`}>
      <div className="item__heading " onClick={() => setShow(!show)}>
        <p
          className={`${
            show ? "item__number--active" : "item__number--inactive"
          }`}
        >
          {question.number}
        </p>
        <p
          className={`${show ? "item__text--active" : "item__text--inactive"}`}
        >
          {question.question}
        </p>

        <CaretDown className="item__icon" />
      </div>

      <div className={`${show ? "item__box--visible" : "item__box--hidden"}`}>
        <p>{question.answer}</p>
      </div>
    </div>
  );
};
