class Student {
	constructor(name){   //constructor equavalent to def initialize in Ruby
		this.name = name;
		this.subjects = [];
	}
	addSubject(subjectName, score){
		const subject = {name: subjectName, score: score}
		this.subjects.push(subject);
	}
}

const studentNameInput = document.getElementById('name')
const addStudentButton = document.getElementById('add-student')
const studentList = document.getElementById('student-list')



let students = []

addStudentButton.addEventListener('click', () => {
	const studentName = studentNameInput.value;
	const student = new Student(studentName);

	students.push(student);
	displayStudentName();
})

function displayStudentName() {
	studentList.innerHTML = ''
	students.forEach((student, index) => {
		const listItem = document.createElement('section')
		const subjectsSection = document.getElementById(`subjects-${index}`);

		listItem.innerHTML = `<p>${student.name}</p>
		<button id="add-subject-${index}">Add Subject</button>
		<section id="subjects-${index}"></section>`

		studentList.append(listItem);
		displaySubject(index)

		const addSubjectButton = document.getElementById(`add-subject-${index}`);


		console.log(addSubjectButton)

		
		addSubjectButton.addEventListener('click', ()=>{
			let subjectName = prompt('Enter Subject Name:')
			let subjectScore = prompt('Enter Score:')
			student.addSubject(subjectName, subjectScore)

			displaySubject(index);

		})		
	})
}

function displaySubject(index){
	const student = students[index];
	const subjectsSection = document.getElementById(`subjects-${index}`);
	subjectsSection.innerHTML = `<p>Subjects:</p>`
	student.subjects.forEach((subject) => {
		const subjectInfo = document.createElement('p');
		subjectInfo.textContent = `${subject.name}: ${subject.score}`
		subjectsSection.append(subjectInfo);
	})
}