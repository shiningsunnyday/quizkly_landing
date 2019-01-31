import React from 'react';
import Cookies from 'js-cookie';

var csrftoken = Cookies.get('csrftoken');

const CSRFToken = () => {
    console.log(csrftoken);
    return (
        <input id="token" type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};
export default CSRFToken;
