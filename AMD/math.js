
define([
    'require',
    'math'
], function (require, factory) {
    'use strict';

    function add(a, b) {
        return a + b
    }
    return {
        add: add
    }
});