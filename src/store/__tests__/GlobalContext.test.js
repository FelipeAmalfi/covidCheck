import React from 'react'
import { InfoContext } from '../GlobalContext'
import renderer from 'react-test-renderer';

test('createStoreTest', () => {
    renderer.create(<InfoContext />);

})