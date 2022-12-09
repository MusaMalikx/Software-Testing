/** @jest-environment jsdom */
import renderer from 'react-test-renderer'
import Search from '../../components/Search/Search'
import SearchDesktop from '../../components/Search/SearchDesktop'
import SearchMobile from '../../components/Search/SearchMobile'
import Checkout from '../../pages/checkout'
import AppShell from '../../pages/appShell'
import Subcategory from "../../pages/search";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import style from '../utility/style.js'
import React from 'react';
import MyDocument from "../../pages/_document";


describe('Checkout',()=>{

    test('Snapshot',()=>{
      const tree = renderer.create(<Checkout />).toJSON()
      expect(tree).toMatchSnapshot();
    })

    test('Tagline Text',()=>{
      render(<Checkout/>)
      const element = screen.getByTestId('checkout-final');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent("Coming soon!");
    })

    test('Tagline Style',()=>{
       render(<Checkout/>)
       const element = screen.getByTestId('checkout-final');
       expect(element).toBeInTheDocument();
       expect(element).toHaveClass(style.h1)
    })

})


describe('Search',()=>{

  test('Search', () => {
    const tree = renderer.create(<Search />).toJSON()
    expect(tree).toMatchSnapshot();
    })

})

describe('Search Desktop',()=>{

  test('Search Desktop', () => {
    const tree = renderer.create(<SearchDesktop />).toJSON()
    expect(tree).toMatchSnapshot();
  })

})

describe('Search Mobile',()=>{

  test('Search Mobile', () => {
    const tree = renderer.create(<SearchMobile />).toJSON()
    expect(tree).toMatchSnapshot();
  })

})

describe('App Shell',()=>{

  test('App Shell', () => {
    const tree = renderer.create(<AppShell />).toJSON()
    expect(tree).toMatchSnapshot();
  })

})

describe('Sub Category',()=>{

  test('Sub Category', () => {
    const component = renderer.create(<Subcategory />);
  
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})

describe('My doc',()=>{

  test('basic snapshot', () => {
    const component = renderer.create(<MyDocument />);
  
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})



