import Ember from 'ember';
import config from './config/environment';
import RouteStepper from './mixins/route-stepper';

var Router = Ember.Router.extend(RouteStepper, {
  location: config.locationType
});

Router.map(function() {
  this.route('sapient');
  this.route('announcements');
  this.route('line-up');
  this.route('datablast');
  this.route('emberconf-sold-out');
  this.route('esnext-6to5');
  this.route('iojs');
  this.route('broccoli-thursdays');
  this.route('broccolijs');
  this.route('data-sources');
  this.route('ember-flash');
});

export default Router;
