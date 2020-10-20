import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Form = ({saveCategory}) => {

    const OPTIONS = [
       {value: 'general', label: 'General'},
       {value: 'business', label: 'Negocios'},
       {value: 'entertainment', label: 'Entretenimiento'},
       {value: 'health', label: 'Salud'},
       {value: 'science', label: 'Ciencia'},
       {value: 'technology', label: 'Tecnología'}
        
    ]

    //Custom hook
    const [ category, SelectNoticias ] = useSelect('general', OPTIONS);
    
    // Form Submit
    const handleSubmit = (e) =>{
        e.preventDefault();

        saveCategory(category);
    }
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    <SelectNoticias />
                    
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Form.propTypes = {
    saveCategory: PropTypes.func.isRequired
}
 
export default Form;