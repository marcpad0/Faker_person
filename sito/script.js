class Person {
	constructor(birthdate, sex, FavoriteMusic, DislikeMusic, IndirizzoIp4, IndirizzoIp6, Name, Surname) {
		this.Name = Name;
		this.Surname = Surname;
		this.birthdate = birthdate;
		this.sex = sex;
		this.music = new Music(FavoriteMusic, DislikeMusic);
		this.Indirizzo = new Rete(IndirizzoIp4, IndirizzoIp6);
	}
}

class Music {
	constructor(FavoriteMusic, DislikeMusic) {
		this.FavoriteMusic = FavoriteMusic;
		this.DislikeMusic = DislikeMusic;
	}
}

class Rete {
	constructor(IndirizzoIp4, IndirizzoIp6) {
		this.IndirizzoIp6 = IndirizzoIp6;
		this.IndirizzoIp4 = IndirizzoIp4;
	}
}

function createPersonCard(person) {
	return `
		<div class="col-lg-6 person-card">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">${person.Name} ${person.Surname}</h5>
					<p class="card-text">Birthdate: ${person.birthdate}</p>
					<p class="card-text">Sex: ${person.sex}</p>
					<p class="card-text">Favorite Song: ${person.music.FavoriteMusic}</p>
					<p class="card-text">Dislike Music: ${person.music.DislikeMusic}</p>
					<p class="card-text">IPv4 Address: ${person.Indirizzo.IndirizzoIp4}</p>
					<p class="card-text">IPv6 Address: ${person.Indirizzo.IndirizzoIp6}</p>
				</div>
			</div>
		</div>
	`;
}


async function fetchDataAndDisplayPersons() {
	try {
		const response = await fetch('http://localhost:3000');
		const data = await response.json();
		const personsContainer = document.getElementById('persons-container');
		personsContainer.innerHTML = ''; 

		const person = new Person(
			data.birthdate,
			data.sex,
			data.favoriteMusic,
			data.dislikeMusic,
			data.indirizzoIp4,
			data.indirizzoIp6,
			data.randomName.split(' ')[0],
			data.randomName.split(' ')[1]
		);
		console.log(person);

		const personCardHTML = createPersonCard(person);
		personsContainer.innerHTML += personCardHTML;
	} catch (error) {
		console.error('Error:', error);
	}
}

const fetchDataBtn = document.getElementById('fetchDataBtn');
fetchDataBtn.addEventListener('click', fetchDataAndDisplayPersons);