var vm = new Vue({
  el: '#app',
  data: {
    ubikeStops: []
  },
  filters: {
    timeFormat(t){

      var date = [], time = [];

      date.push(t.substr(0, 4));
      date.push(t.substr(4, 2));
      date.push(t.substr(6, 2));
      time.push(t.substr(8, 2));
      time.push(t.substr(10, 2));
      time.push(t.substr(12, 2));

      return date.join("/") + ' ' + time.join(":");
    }
  },
  created() {

    // 欄位說明請參照:
    // https://data.tycg.gov.tw/opendata/datalist/datasetMeta?oid=5ca2bfc7-9ace-4719-88ae-4034b9a5a55c

    axios.get('http://data.tycg.gov.tw/api/v1/rest/datastore/a1b4714b-3b75-4ff8-a8f2-cc377e4eaa0f?format=json')
         .then(res => {
          this.ubikeStops = Object.keys(res.data.retVal).map(key => res.data.retVal[key]);
        });
  }
});
