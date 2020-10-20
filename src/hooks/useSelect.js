import React, { useState } from 'react';

const useSelect = (initialState, options) => {

    // Custom hook
    const [ state, updateState ] = useState(initialState);
    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => updateState(e.target.value)}
        >
            {options.map( option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))
            }

        </select>
    );

    return [state, SelectNoticias];
}
 
export default useSelect;