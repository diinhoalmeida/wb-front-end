import { ButtonHTMLAttributes } from 'react';
import './style.css';

interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {};

const Button = (props: ButtonAttributes) => {
    return (
        <button className="button_load_more py-2 px-6 rounded-full text-white">
            Acessar
        </button>
    )
}

export default Button;