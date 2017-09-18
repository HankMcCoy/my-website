import React from 'react'
import glamorous, { Div, H1 } from 'glamorous'

const TrainingLink = glamorous.a({
	color: '#333',
})
const Training = () => (
	<Div maxWidth="900px">
		<H1 marginTop={0}>Training</H1>
		<p>I've put together a few trainings over the years.</p>
		<ul>
			<li>
				<TrainingLink href="https://docs.google.com/presentation/d/1XW3vkiFaHgD0q5CElGI1Tm_4OsrR3Fz08d327ZJGC6s/edit?usp=sharing">
					Git basics
				</TrainingLink>
			</li>
			<li>
				<TrainingLink href="https://docs.google.com/presentation/d/1UJI86XO1mhirNzfferJmszWG32b0nE1OgQw3g5dA7gs/edit?usp=sharing">
					JavaScript
				</TrainingLink>
			</li>
			<li>
				<TrainingLink href="https://docs.google.com/presentation/d/1nICnEH5NN4Q59tMO1DHl5_JI0kN9KjRtO99ct5GIr8k/edit?usp=sharing">
					The Future of the Web
				</TrainingLink>{' '}
				(note: I’m not quite as gung-ho about web components as the future of
				web development as I was at the time I wrote this)
			</li>
		</ul>
	</Div>
)

export default Training
