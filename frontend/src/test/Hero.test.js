import React from "react";
import {render , screen} from '@testing-library/react' ;
import '@testing-library/jest-dom' ;
import { BrowserRouter } from 'react-router';
import Hero from '../landing_page/Home/Hero' ;

// Test suite
describe('Hero Component' , () => {
    // test('renders hero image' , () => {
    //     render(
    //       <BrowserRouter>
    //          <Hero />
    //       </BrowserRouter>
    //     ) ;
    //     const heroImage = screen.getByAltText('Hero Image');
    //     expect(heroImage).toBeInTheDocument() ;
    //     expect(heroImage).toHaveAttribute("src" , "media/images/homeHero.png")
    // });

    //  test('renders signup button' , () => {
    //     render(
    //       <BrowserRouter>
    //          <Hero />
    //       </BrowserRouter>
    //     ) ;
    //     const signupButton = screen.getByRole('button' , { name: "/Sign Up for free " });
    //     expect(signupButton).toBeInTheDocument() ;
    //     expect(signupButton).toHaveClass("btn-primary")
    // });
});