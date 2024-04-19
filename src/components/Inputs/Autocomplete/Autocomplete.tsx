//./components/Autocomplete.tsx

import React, { memo, useRef, useState } from "react";

type AutocompleteProps = {
  items: string[];
  displayItems?: string[];
  value: string;
  onChange(val: string): void;
  label: string;
};

//we are using dropdown, input and menu component from daisyui
const Autocomplete = ({
  items,
  displayItems,
  value,
  onChange,
  label,
}: AutocompleteProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div
      // use classnames here to easily toggle dropdown open

      ref={ref}
    >
      <input
        type="text"
        className="input input-bordered w-full text-main-purple"
        value={displayItems ? displayValue : value}
        onChange={displayItems? (e) => setDisplayValue(e.target.value) : (e) => onChange(e.target.value)}
        placeholder={label}
        tabIndex={0}
      />
      {/* add this part */}
      <div className="dropdown-content bg-base-200 top-14 max-h-96 overflow-auto flex-col rounded-md">
        <ul
          className="menu menu-compact text-main-purple"
          // use ref to calculate the width of parent
          style={{ width: ref.current?.clientWidth }}
        >
          {!displayItems &&
            items
              .filter((item) => item.toLowerCase().includes(value))
              .map((item, index) => {
                return (
                  <li
                    key={index}
                    tabIndex={index + 1}
                    onClick={() => {
                      onChange(item);
                      setOpen(false);
                    }}
                    className="border-b border-b-base-content/10 w-full text-main-purple"
                  >
                    {!displayItems && <button>{item}</button>}
                    {displayItems && <button>{displayItems[index]}</button>}
                  </li>
                );
              })}

          {displayItems &&
            displayItems
              .filter((item) => item.toLowerCase().includes(displayValue))
              .map((item, index) => {
                return (
                  <li
                    key={index}
                    tabIndex={index + 1}
                    onClick={() => {
                      onChange(items[index+1]);
                      setOpen(false);
                    }}
                    className="border-b border-b-base-content/10 w-full text-main-purple"
                  >
                    <button onClick={() => setDisplayValue(item)}>{item}</button>
                  </li>
                );
              })}
          
          {!displayItems && items.filter((item) => item.toLowerCase().includes(value)).length === 0 &&
            "ასეთი ნივთი ვერ მოიძებნა!"}
            {displayItems && displayItems.filter((item) => item.toLowerCase().includes(displayValue.toLowerCase())).length === 0 &&
            "ასეთი ნივთი ვერ მოიძებნა!"}
        </ul>
        {/* add this part */}
      </div>
    </div>
  );
};

export default memo(Autocomplete);
