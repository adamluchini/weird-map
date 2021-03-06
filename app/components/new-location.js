import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveLocation() {
      var locationCategory;
      if (this.get('category') === undefined)
      {
        locationCategory =  'Other';
      } else {
        locationCategory = this.get('category');
      }
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        category: locationCategory,
        website: this.get('website'),
        streetview: this.get('streetview')
      };
      this.set('addNewLocation', false);
      this.sendAction('saveLocation', params);
    },
    selectCategory(category) {
      this.set('category', category);
    }
  }
});
