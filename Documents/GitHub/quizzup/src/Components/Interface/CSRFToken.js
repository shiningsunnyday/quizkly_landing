import React from 'react';
import Cookies from 'js-cookie';

const CSRFToken = () => {
    var csrftoken = Cookies.get('csrftoken');
    return (
        <input id="token" type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};
export default CSRFToken;
