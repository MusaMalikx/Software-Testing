import React from 'react';
import NavBar from '../components/NavBar';
import renderer from 'react-test-renderer';

 

let tab=[
    {
        as:'as',
        href:'href', 
        text:'text',
        items:[
            {
            as:'as',
            href:'href', 
             text:'text',
        },
       {
            as:'as',
            href:'href', 
             text:'text',
        }
    ]
    }
]
  

test('basic snapshot', () => {
    const component = renderer.create(<NavBar tabs={tab} />);
  
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });