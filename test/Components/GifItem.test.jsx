import { render, screen } from "@testing-library/react";
import GifItem from "../../src/Components/GifItem";

describe('Pruebas en <GiftIten/>',()=>{

    const title = 'Digimon';
    const url = 'https://digimon.com/digimon.jpg'

    test('debe hacer macth con el snapshot', ()=>{
    
       const {container} = render(<GifItem title={title} url = {url}/>);
       expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', ()=>{
        render(<GifItem title={title} url = {url}/>)
        //screen.debug()
        //expect( screen.getByRole('img').src).toBe(url);
        const {src, alt} =  screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })

    test('Debe mostrar el titulo del componente', ()=>{
        render(<GifItem title={title} url = {url}/>)
        expect(screen.getByText(title)).toBeTruthy();
    })
}); 