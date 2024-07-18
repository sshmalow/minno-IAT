define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Male', //Will appear in the data.
			title : {
				media : {word : 'Male'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		  {word : 'Man'}, 
    			{word : 'Son'}, 
    			{word : 'Father'}, 
    			{word : 'Boy'}, 
    			{word : 'Uncle'}, 
    			{word : 'Grandpa'},
          {word : 'Husband'},
          {word : 'Grandpa'}
        
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Female', //Will appear in the data.
			title : {
				media : {word : 'Female'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'Mother'}, 
    			{word : 'Wife'}, 
    			{word : 'Grandma'}, 
    			{word : 'Aunt'}, 
    			{word : 'Woman'}, 
    			{word : 'Girl'},
          {word : 'Daughter'}
      ], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		} 
	});
});
