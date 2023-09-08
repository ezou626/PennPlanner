'use client';
import React from "react";
import Button from "./button";
import { useState } from 'react';
import { useSession } from "next-auth/react";

export default async function Dashboard() {

	const {data: session} = useSession();

	let name: string = "";
	let email: string = "";

	if (session !== null) {
		name = session.user!.name!;
		email = session.user!.email!;
	}

	const backendURL = process.env.API_URL;

	//add user if not already
	await fetch(`${backendURL}/user`, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify({"secret": process.env.API_SECRET, "name": name, "email": email}),
	});

	const initialData = await fetch(`${backendURL}/data`, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify({"secret": process.env.API_SECRET, "name": name, "email": email}),
	});

	const [semesterClasses, setSemesterClasses] = useState((await initialData.json()).data as string[][]);

	const addSemester = async () => {
		setSemesterClasses ( (semesters) =>
			[...semesters, []]
		)
		await fetch(`${backendURL}/semester`, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify({"secret": process.env.API_SECRET, "name": name, "email": email}),
		});
	}

	const removeSemester = async (semesterIndex: number) => {
		setSemesterClasses ( (semesters) =>
			semesters.filter((_, index) => index !== semesterIndex)
		)
		await fetch(`${backendURL}/semester`, {
			method: "DELETE",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify({"secret": process.env.API_SECRET, 
				"name": name, "email": email, 
				"semesterIndex": semesterIndex}),
		});
	}

	const addCourse = async (semesterIndex: number, courseName: string) => {
		const newSemesterClasses = [...semesterClasses];

		newSemesterClasses[semesterIndex] = [...newSemesterClasses[semesterIndex], courseName]

		await fetch(`${backendURL}/course`, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify({"secret": process.env.API_SECRET, 
				"name": name, "email": email, 
				"semesterIndex": semesterIndex, "courseName": courseName}),
		});

		setSemesterClasses(newSemesterClasses);
	}

	const removeCourse = async (semesterIndex: number, courseIndex: number) => {
		const newSemesterClasses = [...semesterClasses];

		newSemesterClasses[semesterIndex] = newSemesterClasses[semesterIndex].filter(
			(_, index) => index !== courseIndex
		)

		await fetch(`${backendURL}/course`, {
			method: "DELETE",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify({"secret": process.env.API_SECRET, 
				"name": name, "email": email, 
				"semesterIndex": semesterIndex, "courseIndex": courseIndex}),
		});

		setSemesterClasses(newSemesterClasses);
	}

	const renderSemesterComponent = (semesterIndex: number, courses: string[]) => {
		return (
			<ul className='inline-flex flex-wrap'>
			{courses.map((course, index) => (
				<li key={index}>
					<div className='text-md rounded px-2 py-2 font-bold inline-flex'>
						<p className='px-2 py-2 font-bold'>{`${course}`}</p>
						<Button color='red' onClick={() => {removeCourse(semesterIndex, index);}}>Remove</Button>
					</div>
				</li>
			))}
			</ul>
		);
	}

	const renderSemesters = () => {
		return (
			<ul className='inline-flex flex-wrap'>
			{semesterClasses.map((courses: string[], semesterIndex: number) => {

        let textInput = React.createRef<HTMLInputElement>();

        function handleClick() {
          if (textInput.current != null && textInput.current.value !== "") {
            addCourse(semesterIndex, textInput.current.value);
            textInput.current.value = "";
          }
        }        

				return (<li key={semesterIndex} className='rounded border border-neutral-500 w-40 min-h-[20rem] mr-2 mb-1 flex flex-col justify-between'>
					<div className='flex flex-col'>
            <p className='rounded w-50 mr-2 mb-1 text-center p-2'>{`Semester ${semesterIndex + 1}`}</p>
            <input ref={textInput} className='rounded text-center' placeholder="Enter Course Name" />
            <Button color='green' onClick={handleClick}>Add Course</Button>
          </div>
          {renderSemesterComponent(semesterIndex, courses)}
          <Button color='red' onClick={() => removeSemester(semesterIndex)}>Remove Semester</Button>
				</li>);
      }
			)}
			</ul>
		)
	}

	return (
		<>
			<div className='py-5'>
			<Button color='green' onClick={addSemester}>Add Semester</Button>
			</div>
			{renderSemesters()}
		</>
	)
}