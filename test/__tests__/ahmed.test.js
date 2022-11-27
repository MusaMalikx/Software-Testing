/** @jest-environment jsdom */
import renderer from 'react-test-renderer'
import Search from '../../components/Search/Search'
import SearchDesktop from '../../components/Search/SearchDesktop'
import SearchMobile from '../../components/Search/SearchMobile'
import Checkout from '../../pages/checkout'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import style from '../utility/style.js'


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

