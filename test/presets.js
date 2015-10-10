/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var rescale = require('rescale')(Decimal).rescale;
var mass = require('linear-preset-factory')(require('../src/linear-presets-mass'));

function convert(x, preset) {
  return Number(rescale(preset[0], preset[1], x));
}

function invert(preset) {
  return preset.slice().reverse();
}

describe('mass presets', function() {
  it('should convert correctly', function() {
    (10).should.be.exactly(convert(10, invert(mass.kilogram_kilogram)), 'kilogram_kilogram')
      .and.exactly(convert(0.01, invert(mass.kilogram_metricTon)), 'kilogram_metricTon')
      .and.exactly(convert(10000, invert(mass.kilogram_gram)), 'kilogram_gram')
      .and.exactly(convert(1e+7, invert(mass.kilogram_milligram)), 'kilogram_milligram')
      .and.exactly(convert(1e+10, invert(mass.kilogram_microgram)), 'kilogram_microgram')
      .and.exactly(convert(0.00984251968503937, invert(mass.kilogram_longTon)), 'kilogram_longTon')
      .and.exactly(convert(0.011023113109243879, invert(mass.kilogram_shortTon)), 'kilogram_shortTon')
      .and.exactly(convert(1.5747304441776968, invert(mass.kilogram_stone)), 'kilogram_stone')
      .and.exactly(convert(22.046226218487757, invert(mass.kilogram_pound)), 'kilogram_pound')
      .and.exactly(convert(352.7396194958041, invert(mass.kilogram_ounce)), 'kilogram_ounce');

    (0).should.be.exactly(convert(0, mass.kilogram_kilogram), 'kilogram_kilogram')
      .and.exactly(convert(0, mass.kilogram_metricTon), 'kilogram_metricTon')
      .and.exactly(convert(0, mass.kilogram_gram), 'kilogram_gram')
      .and.exactly(convert(0, mass.kilogram_milligram), 'kilogram_milligram')
      .and.exactly(convert(0, mass.kilogram_microgram), 'kilogram_microgram')
      .and.exactly(convert(0, mass.kilogram_longTon), 'kilogram_longTon')
      .and.exactly(convert(0, mass.kilogram_shortTon), 'kilogram_shortTon')
      .and.exactly(convert(0, mass.kilogram_stone), 'kilogram_stone')
      .and.exactly(convert(0, mass.kilogram_pound), 'kilogram_pound')
      .and.exactly(convert(0, mass.kilogram_ounce), 'kilogram_ounce');
  });
});
