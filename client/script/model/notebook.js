Application.Notebook = DS.Model.extend({
    title: DS.attr('string'),
    notes: DS.attr('string'),
    nominals: DS.hasMany('Application.Nominal')
});