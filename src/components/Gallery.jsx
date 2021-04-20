import './gallery.css'
import cat from '../img/cat2.jpg';
import { useState } from 'react';
import Bordered from './Bordered'

const Gallery = () => {

    const [columns, setColumns] = useState(2);

    let columnsClass = 'gallery';
    if( columns === 1) {
        columnsClass += ' one-column'
    } else if( columns === 2) {
        columnsClass += ' two-columns';
    } else if( columns === 3) {
        columnsClass += ' three-columns';   
    }

    const selectedButtonStyle = {
        fontWeight: 'bold'
    }

    return (
        <div className = {columnsClass}>

            <Bordered>
                <button onClick={() => setColumns(1) } 
                style={columns === 1 ? selectedButtonStyle : null}>One column</button>
                <button onClick={() => setColumns(2) }
                style={columns === 2 ? selectedButtonStyle : null}>Two columns</button>
                <button onClick={() => setColumns(3) }
                style={columns === 3 ? selectedButtonStyle : null}>Three columns</button>
            </Bordered>

            <img src={cat} alt="cat 2" />

            <img src="img/cat3.jpg" alt="cat 3" />
            <img src="img/cat4.jpg" alt="cat 4" />
            <img src="img/cat5.jpg" alt="cat 5" />
            <img src="img/cat6.jpg" alt="cat 6" />

        </div>
    )
}

export default Gallery;