import { render } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";


describe('Pruebas en <GifGrid/>',()=>{

    const category = 'Digimon';

    test('debe de mostrar el loading inicialmente', ()=>{
        render(<GifGrid/>)
     });

    

}); 