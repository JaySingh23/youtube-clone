import React from 'react'
import { categoriesFirst, categoriesSecond } from '../utils/constants'
import { Stack } from '@mui/material'
import "../css/sidebar.css"

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <>
      <Stack direction="row" sx={{overflowY: 'auto', height: 'auto', flexDirection: {md: 'column'}, justifyContent: 'flex-start'}}>
        {categoriesFirst.map((category) => (
          <button className='category-btn' onClick={() => setSelectedCategory(category.name)} style={{ background: category.name === selectedCategory && '#282828'}}>
            <span style={{marginRight: '0.7rem'}}>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </Stack>
      <hr style = {{borderColor: '#282828'}} />
      <Stack direction="row" sx={{overflowY: 'auto', height: 'auto', flexDirection: {md: 'column'}, justifyContent: 'flex-start'}}>
        {categoriesSecond.map((category) => (
          <button className='category-btn' onClick={() => setSelectedCategory(category.name)} style={{ background: category.name === selectedCategory && '#282828'}}>
            <span style={{marginRight: '0.7rem'}}>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </Stack>
    </>
  )
}

export default Sidebar