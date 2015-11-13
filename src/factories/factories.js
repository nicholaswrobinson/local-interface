/*
 |--------------------------------------------------------------------------
 | React HTML factories
 |
 | - INCOMPLETE. Happy to accept PR's to complete :)
 |--------------------------------------------------------------------------
 **/

var react = require('react'),
merge = require('lodash').merge,
_ = react.createFactory,
transition = function (opts, ...children) {
    return _(require('react/lib/ReactCSSTransitionGroup'))(merge({}, {
        transitionAppearTimeout: 0,
        transitionEnterTimeout: 0,
        transitionLeaveTimeout: 0
    }, opts), ...children);
};

module.exports._ = _;
module.exports.transition = transition;
module.exports.div = _('div');
module.exports.h1 = _('h1');
module.exports.h2 = _('h2');
module.exports.h3 = _('h3');
module.exports.h4 = _('h4');
module.exports.h5 = _('h5');
module.exports.h6 = _('h6');
module.exports.a = _('a');
module.exports.button = _('button');
module.exports.p = _('p');
module.exports.b = _('b');
module.exports.i = _('i');
module.exports.image =  _('image');
module.exports.form = _('form');
module.exports.input = _('input');
module.exports.select =  _('select');
module.exports.option = _('option');
module.exports.label = _('label');
module.exports.text = _('text');

module.exports._clone = function (component, props) {
    return react.cloneElement(component || _('div')({}), props)
};