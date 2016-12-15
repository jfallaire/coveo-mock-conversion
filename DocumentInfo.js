

module.exports = {
    Title:'',
    URI:'',
    Metadata: {},
    IsValid: true,
    SummaryConcepts: '',
    Language: '1',
    SetFieldValue: function (name, value) {
        this.Metadata[name] = value;
    },
    GetFieldValue: function(name) {
      if(this.Metadata[name]) {
        return this.Metadata[name];
      } else {
        throw 'Metadata ['+ name + '] not found!';
      }

    }
};
