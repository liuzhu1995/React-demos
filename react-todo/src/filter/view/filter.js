import React from 'react';
import {FilterTypes} from '../../constants'
import Link from './link';
import  './styles.css'


const Filter = () => {
  return (
      <div className="filters-wrap">
        <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
        <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
        <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
      </div>
  )
};

export default Filter;