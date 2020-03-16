/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import expect from 'expect';

import usersession from '../usersession';
import {USER_SESSION_SAVED, USER_SESSION_LOADING} from "../../actions/usersession";

// saveUserSession, userSessionSaved, loading
describe('Test the usersession reducer', () => {
    it('user session saved', () => {
        const state = usersession({}, { type: USER_SESSION_SAVED, id: 1, session: {attribute: "mysession"} });
        expect(state.session).toExist();
        expect(state.id).toBe(1);
        expect(state.session.attribute).toBe("mysession");
    });
    it('user session loading start', () => {
        const state = usersession({}, { type: USER_SESSION_LOADING, name: "loading", value: true });
        expect(state.loading.value).toBe(true);
        expect(state.loading.name).toBe("loading");
    });
    it('user session loading end', () => {
        const state = usersession({}, { type: USER_SESSION_LOADING, name: "loading", value: false });
        expect(state.loading.value).toBe(false);
        expect(state.loading.name).toBe("loading");
    });
});
