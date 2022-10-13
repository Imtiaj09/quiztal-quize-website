import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="bg-gray-800 text-gray-50">
	<div className="container grid grid-cols-12 mx-auto">
		<div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto">
			<div className="flex flex-col items-center p-8 py-12 text-center">
				<span>12 October</span>
				<h1 className="py-4 text-5xl font-bold text-cyan-200">ReactJS interview Q&A</h1>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
					<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</div>
		</div>
		<div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
			<div className="pt-6 pb-4 space-y-2">
				<span>12 October</span>
				<h1 className="text-3xl font-bold text-cyan-200">What is the purpose of react router?</h1>
				<p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
				<Link rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-violet-400">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</Link>
			</div>
			<div className="pt-6 pb-4 space-y-2">
				<span>12 October</span>
				<h1 className="text-3xl font-bold text-cyan-200">How dose context api work?</h1>
				<p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
				<Link rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-violet-400">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</Link>
			</div>
			<div className="pt-6 pb-4 space-y-2">
				<span>12 October</span>
				<h1 className="text-3xl font-bold text-cyan-200">what is the use of useRef in react?</h1>
				<p>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
				<Link rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-violet-400">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</Link>
			</div>
		</div>
	</div>
</div>
  );
};

export default Blog;