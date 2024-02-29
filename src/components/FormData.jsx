import React from 'react'
import styles from './style.module.css'


const FormData = ({ name, stock, price }) => {
    return (
        <div>
            {/* css module */}
            <h2 className={styles.text}>Product</h2>
            {/* inline */}
            <ul style={{ listStyle: "none" }}>
                <li className='text-primary'>Nama : {name}</li>
                <li className='text-danger'>Harga : {price}</li>
                <li className='text-warning'>Stok : {stock}</li>
            </ul>
        </div>
    )
}

export default FormData