/*jshint node:true, mocha:true */

'use strict';

require('should');

var rescale = require('rescale')(require('floating-adapter')).rescale;
var mass = require('../src/linear-presets-mass');

function convert(x, preset) {
  return rescale(x, preset[0], preset[1]);
};

function invert(preset) {
  return preset.slice(0).reverse();
};

describe('mass presets', function() {
  it('should convert correctly', function() {
    (10).should.be.exactly(convert(0.01, invert(mass.kilogramToMetricTon)), 'kilogramToMetricTon')
      .and.exactly(convert(10000, invert(mass.kilogramToGram)), 'kilogramToGram')
      .and.exactly(convert(1e+7, invert(mass.kilogramToMilligram)), 'kilogramToMilligram')
      .and.exactly(convert(1e+10, invert(mass.kilogramToMicrogram)), 'kilogramToMicrogram')
      .and.exactly(convert(0.00984251968503937, invert(mass.kilogramToLongTon)), 'kilogramToLongTon')
      .and.exactly(convert(0.011023113109243879, invert(mass.kilogramToShortTon)), 'kilogramToShortTon')
      .and.exactly(convert(1.5747304441776968, invert(mass.kilogramToStone)), 'kilogramToStone')
      .and.exactly(convert(22.046226218487757, invert(mass.kilogramToPound)), 'kilogramToPound')
      .and.exactly(convert(352.7396195580167, invert(mass.kilogramToOunce)), 'kilogramToOunce');

    (0).should.be.exactly(convert(0, mass.kilogramToMetricTon), 'kilogramToMetricTon')
      .and.exactly(convert(0, mass.kilogramToGram), 'kilogramToGram')
      .and.exactly(convert(0, mass.kilogramToMilligram), 'kilogramToMilligram')
      .and.exactly(convert(0, mass.kilogramToMicrogram), 'kilogramToMicrogram')
      .and.exactly(convert(0, mass.kilogramToLongTon), 'kilogramToLongTon')
      .and.exactly(convert(0, mass.kilogramToShortTon), 'kilogramToShortTon')
      .and.exactly(convert(0, mass.kilogramToStone), 'kilogramToStone')
      .and.exactly(convert(0, mass.kilogramToPound), 'kilogramToPound')
      .and.exactly(convert(0, mass.kilogramToOunce), 'kilogramToOunce');
  });
});
