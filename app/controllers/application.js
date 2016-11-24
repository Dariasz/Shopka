import Ember from 'ember';

export default Ember.Controller.extend({
  leftSideBarOpen: false,


  actions: {

    toggleSlideNav() {
      this.toggleProperty('leftSideBarOpen');
    }

  }
});
