var Persons = [
            {
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/image1.jpg",	
			likes: 0
			},
			{
			name: 'Jane',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/image2.jpg",	
			likes: 0   
			},
			{
			name: 'Maxina',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/image3.jpg",	
			likes: 0 
			},
			{
			name: 'Max',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/image4.jpg",	
			likes: 0    
			}
];


var tree = document.createDocumentFragment();
for (var i= 0; i< Persons.length; i++){
	var container = document.createElement("div");
	container.setAttribute("class", "container");
	
	var profile = document.createElement("div");
	profile.setAttribute("class", "profile");
	container.appendChild(profile);
	

	var picture = document.createElement("div");
	picture.setAttribute("class", "picture");
	profile.appendChild(picture);
	
	var img = document.createElement("img");
	img.setAttribute("src", Persons[i].myPhoto);
	picture.appendChild(img);
	
	var details = document.createElement("div");
	details.setAttribute("class", "details");
	profile.appendChild(details);
	
	var nameSpan = document.createElement("span");
	nameSpan.setAttribute("class", "large");
	nameSpan.appendChild(document.createTextNode("Name:   "));
	details.appendChild(nameSpan);
	
	var nameSpanValue = document.createElement("span");
	nameSpanValue.setAttribute("class", "x-large");
	nameSpanValue.appendChild(document.createTextNode(Persons[i].name));
	details.appendChild(nameSpanValue);
	details.appendChild(document.createElement("br"));
	
	var surnameSpan = document.createElement("span");
	surnameSpan.setAttribute("class", "large");
	surnameSpan.appendChild(document.createTextNode("Surname:   "));
	details.appendChild(surnameSpan);
	
	var surnameSpanValue = document.createElement("span");
	surnameSpanValue.setAttribute("class", "x-large");
	surnameSpanValue.appendChild(document.createTextNode(Persons[i].surname));
	details.appendChild(surnameSpanValue);
	details.appendChild(document.createElement("br"));
	
	var ageSpan = document.createElement("span");
	ageSpan.setAttribute("class", "large");
	ageSpan.appendChild(document.createTextNode("Age:   "));
	details.appendChild(ageSpan);
	
	var ageSpanValue = document.createElement("span");
	ageSpanValue.setAttribute("class", "x-large");
	ageSpanValue.appendChild(document.createTextNode(Persons[i].age));
	details.appendChild(ageSpanValue);
	details.appendChild(document.createElement("br"));
	details.appendChild(document.createElement("br"));
	
	var like = document.createElement("div");
	like.setAttribute("class", "like");
	details.appendChild(like);
	
	
	var buttonWrapper = document.createElement("span");
	buttonWrapper.setAttribute("class", "buttonWrapper");
	like.appendChild(buttonWrapper);
	
	var likeButton = document.createElement("button");
	likeButton.setAttribute("type", "button");
	likeButton.setAttribute("onclick", "incrementLikes(" + i + ", Persons[" + i + "])");
	likeButton.appendChild(document.createTextNode("Like"));
	buttonWrapper.appendChild(likeButton);
	
	var nrOfLikes = document.createElement("span");
	nrOfLikes.setAttribute("id", "person" + i + "_likes");
	nrOfLikes.appendChild(document.createTextNode(Persons[i].likes));
	like.appendChild(nrOfLikes);
	
	var heart = document.createElement("span");
	like.appendChild(heart);
	
	var heartImage = document.createElement("img");
	heartImage.setAttribute("src", "img/like.png");
	heart.appendChild(heartImage);
	
	tree.appendChild(container);
	}
document.getElementById("profiles").appendChild(tree);

function incrementLikes(index, person){
	person.likes++;
	document.getElementById("person" + index + "_likes").innerHTML = person.likes;
}