import { SelectContainer, SelectLabel, Select } from './select-input.styles'
import { ChangeEvent, FC, useState } from 'react'


type SelectInputProp = {
    label: string,
    options: {
        id: number,
        value: string | number
    }[],
    defaultValue: string,
    onChangeTag: Function
}



const SelectInput:FC<SelectInputProp> = ({label, options, onChangeTag, defaultValue}) => {

    const [selectedTag, setSelectedTag] = useState(defaultValue)

    const handleSelectChange = (event:ChangeEvent<HTMLSelectElement>) => {
        setSelectedTag(event.target.value)
        onChangeTag(event.target.value)
    }

    return <SelectContainer>
          <SelectLabel >{label}</SelectLabel>
    <Select value={selectedTag}  onChange={handleSelectChange}>
    <option value="" disabled>Select an tag</option>
      { 
        options.map(option => {
            return <option key={option.id} value={option.value}>{option.value}</option>
        })
      }
    </Select>
  </SelectContainer>
}

export default SelectInput