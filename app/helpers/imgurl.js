import Ember from 'ember';

export function imgurl(url) {
    return new Ember.Handlebars.SafeString('<img src="https://peaceful-everglades-8933.herokuapp.com/' + url + '"/>');
}

export default Ember.Helper.helper(imgurl);
