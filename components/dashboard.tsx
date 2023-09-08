'use client';
import React from "react";
import Button from "./button";
import { useState } from 'react';

export default function Dashboard() {

	const [semesterClasses, setSemesterClasses] = useState([] as string[][]);

	const addSemester = () => {
		setSemesterClasses ( (semesters) =>
			[...semesters, []]
		)
	}

	const removeSemester = (semesterIndex: number) => {
		setSemesterClasses ( (semesters) =>
			semesters.filter((_, index) => index !== semesterIndex)
		)
	}

	const addCourse = (semesterIndex: number, courseName: string) => {
		const newSemesterClasses = [...semesterClasses];

		newSemesterClasses[semesterIndex] = [...newSemesterClasses[semesterIndex], courseName]

		setSemesterClasses(newSemesterClasses);
	}

	const removeCourse = (semesterIndex: number, courseIndex: number) => {
		const newSemesterClasses = [...semesterClasses];

		newSemesterClasses[semesterIndex] = newSemesterClasses[semesterIndex].filter(
			(_, index) => index !== courseIndex
		)

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