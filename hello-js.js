'use strict';

function test1() {
    document.cookie = testsource(); //#defect#SA.COOKIE_INJECTION
}
