import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/Components/AddCategory";

describe('Pruebas en <AddCategory/>',()=>{

    test('debe de cambiar el valor en la caja de texto', ()=>{
    
        render(<AddCategory agregar={()=>{}}/>)
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target:{value: 'Digimon'}});
        expect(input.value).toBe('Digimon')
     });

     test('debe de llamar agragras, si el input tiene un valor', ()=>{

        const inputValue = 'Digimon';
        const agregar = jest.fn()
    
        render(<AddCategory agregar={agregar}/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(agregar).toHaveBeenCalled();
        expect(agregar).toHaveBeenCalledTimes(1);
        expect(agregar).toHaveBeenCalledWith(inputValue)
     });

     test('no debe de llamar al "agregar" si el input está vacio', ()=>{

       // const inputValue = '';
        const agregar = jest.fn();

        render(<AddCategory agregar={agregar}/>)

       // const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
       // fireEvent.input(input, {target:{value: inputValue}});
        fireEvent.submit(form);
        expect(agregar).not.toHaveBeenCalled()

        
     });

}); 