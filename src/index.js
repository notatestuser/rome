'use strict';
var no;
var ikey = 'romeId';
var index = [];

function find (thing) { // can be a DOM element or a number
  if (typeof thing !== 'number' && thing && thing.getAttribute) {
    return find(thing.getAttribute(ikey));
  }
  var existing = index[thing];
  if (existing !== no) {
    return existing;
  }
}

function assign (elem, instance) {
  instance.id = index.push(instance) + 1;
  elem.setAttribute(ikey, instance.id);
}

module.exports = {
  find: find,
  assign: assign
};
