import React, { useEffect, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import Relationship from './Relationship';
import { usePopper } from 'react-popper';
import { grey } from './colors';
import PlusIcon from '../../../../../public/img/Plus';
import { randomColor } from './utils';

export default function Cell({ value: initialValue, row: { index }, column: { id, dataType, options }, dataDispatch }) {
  const [value, setValue] = useState({ value: initialValue, update: false });
  const [selectRef, setSelectRef] = useState(null);
  const [selectPop, setSelectPop] = useState(null);
  const [showSelect, setShowSelect] = useState(false);
  const onChange = (e) => {
    setValue({ value: e.target.value, update: false });
  };
  const [showAdd, setShowAdd] = useState(false);
  const [addSelectRef, setAddSelectRef] = useState(null);

  useEffect(() => {
    setValue({ value: initialValue, update: false });
  }, [initialValue]);

  useEffect(() => {
    if (value.update) {
      dataDispatch({ type: 'update_cell', columnId: id, rowIndex: index, value: value.value });
    }
  }, [value, dataDispatch, id, index]);

  useEffect(() => {
    if (addSelectRef && showAdd) {
      addSelectRef.focus();
    }
  }, [addSelectRef, showAdd]);

  let element;
  switch (dataType) {
    case 'text':
      element = (
        <ContentEditable
          html={(value.value && value.value.toString()) || ''}
          onChange={onChange}
          onBlur={() => setValue((old) => ({ value: old.value, update: true }))}
          className="data-input"
        />
      );
      break;
  }

  return element;
}
