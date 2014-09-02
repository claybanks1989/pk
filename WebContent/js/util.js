YUI().use(
  'aui-datatable',
  'datatable-sort',
  'aui-io-request',
  function(Y) {
    var columns = [
      { key: 'id', sortable: true },
      { key: 'name', sortable: true },
      { key: 'type', sortable: true }
    ];

    Y.io.request(
    	      'json/metadata.json',
    	      {
    	        on: {
    	          success: function() {
    	            var response = this.get('responseData');
    	            try {
    	                jdata = Y.JSON.parse(response);
    	                console.log('JSON data parsed: ' + jdata.pokemon);
    	             }
    	             catch (e) {
    	                 alert("Invalid JSON data");
    	             }
    	             var dataTable = new Y.DataTable(
   	            	      {
   	            	        columns: columns,
   	            	        data: jdata.pokemon
   	            	      }
   	            	    ).render("#searchResultsContainer");
    	          }
    	        }
    	      }
    	    );
   /* var searchButton = Y.one('#searchButton');

    searchButton.on(
      'click',
      function() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        searchButton.setStyle('background', '#' + randomColor);
      }
    );*/
    
    
    
    
  /*  var data = [
                {
                  id: 025,
                  name: 'Pikachu',
                  type: 'Electric'
                },
                {
                  id:	009,
                  name: 'Charizard',
                  type: 'Fire'
                },
                {
                  id:	054,
                  name: 'Psyduck',
                  type: 'Water'
                }
              ];
  new Y.DataTable(
      {
        columns: columns,
        data: data
      }
    ).render("#searchResultsContainer");*/
  }
);