/* global import BootboxWrapper from './common/bootboxWrapper.es6'; import { StatusType } from './const.es6'; */

const loadUpFunction = function () {
    const typingErrMsg = 'Please use | character ( shift+\\ ) to seperate fields, or copy from your existing spreadsheet.';
    let notified = false;

    function isUserTyping(str) {
        return str.indexOf('\t') === -1 && str.indexOf('|') === -1;
    }
    window.isUserTyping = isUserTyping;

    const ENTER_KEYCODE = 13;
    let enrolTextbox = $('#enrollstudents');
    if (enrolTextbox.length) {
        enrolTextbox = enrolTextbox[0];
        $(enrolTextbox).keydown((e) => {
            const keycode = e.which || e.keyCode;
            if (keycode === ENTER_KEYCODE) {
                if (isUserTyping(e.target.value) && !notified) {
                    notified = true;
                    BootboxWrapper.showModalAlert('Invalid separator', typingErrMsg, BootboxWrapper.DEFAULT_OK_TEXT,
                                                  StatusType.WARNING);
                }
            }
        });
    }
};

if (window.addEventListener) {
    window.addEventListener('load', loadUpFunction);
} else {
    window.attachEvent('load', loadUpFunction);
}
