var userI = "Bret"; //Initial User Name
//You can put any user name from the users list
 var id;
 var albumId = [] ;
  var albumTitle = [] ;
  var photoId =[];
  var photoURL =[];
  
 
 //Function to get the USERID based on the input USER NAME
 
 //Here for testing purpose I Have taken user name as "Karianne"
 function finduserId()
 {
 
 fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
   return response.json();
 }).then(function(myJson){
	
	for(var i in myJson){
			
			if(myJson[i].username == userI)
			{
				id = myJson[i].id;
				//Prints the username and User ID to console
				console.log("user name is: "+myJson[i].username+ " and ID: #"+myJson[i].id)
								
			}
				
	}
	
	findAlbumId();
	
 })
 
 }

 
//Function to fetch the AlbumID based on the UserId 
 function findAlbumId(){
   			
fetch("https://jsonplaceholder.typicode.com/albums?userId="+id).then(function(response){
   return response.json();
 }).then(function(myJson){
	//console.log(myJson);
	
	for(var j in myJson)
	{
		
		if(myJson[j].id !== null && myJson[j].title !== null)
		{
			//Storing the album id and album title of respective user id
		albumId.push(myJson[j].id);
		//alert(albumId);
		albumTitle.push(myJson[j].title);
		//alert(albumTitle);
		
		}

	}
	for(var k in albumId){
		//prints the album id and album title of respective user to console
			console.log("Associated album id: "+albumId[k]);
			console.log("Associated album Name: "+albumTitle[k]);
		}
	findPhotos();
 
 })
 
 }
 

 //Function to fetch all the thumbnails and Photographs based on album id
 function findPhotos( ){
 
 for (var i in albumId)
 {
 
 fetch("https://jsonplaceholder.typicode.com/photos?albumId="+albumId[i]).then(function(response){
   return response.json();
 }).then(function(myJson){
 // console.log(myJson);
  for(var j in myJson)
    {
  
	  if(myJson[j].id !== null && myJson[j].url !== null)
	   {
	   	//storing the photos of respective user in a array
			photoId.push(myJson[j].id);			
			photoURL.push(myJson[j].url);
			
		}
	  
	}
    
 })
 
 }
 	//prints the photoId and PhotoUrl to the console 
 	console.log("*****All the associated photograph links of: "+userI+"******");
 	console.log(photoURL);
 	//console.log(photoId);
  	
 }

 window.onload = function(){
 	finduserId()
 };