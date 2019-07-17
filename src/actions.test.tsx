import * as actions from './Actions';
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCES,
    REQUEST_ROBOTS_FAILED
} from './Constants';


it('should create an action to search robots', () => {
    const text = 'woo';
    const expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text
    };

    expect(actions.setSearchField(text)).toEqual(expectedAction);
})