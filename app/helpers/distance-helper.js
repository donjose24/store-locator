import Ember from 'ember';

export function distanceHelper(params/*, hash*/) {
  let distanceArray = params[0];
  let index = params[1];

  return distanceArray[index].distance;
}
export default Ember.Helper.helper(distanceHelper);
