<template>
	<div class="resume modern">
		<div class="sidebar">
			<div class="info">
				<h1>{{ name }}</h1>
				<h2>{{ title }}</h2>
				<a href="https://subasically.me">subasically.me</a>
			</div>
			<div class="me">
				<h3>Me</h3>
			</div>
			<div class="skills">
				<h3>Skills</h3>
			</div>
			<div class="experience">
				<h3>Experience</h3>
			</div>
			<div class="education">
				<h3>Education</h3>
			</div>
		</div>
		<div class="content">
			<ul>
				<li v-for="experience in experiences" :key="experience.id">
					<h3>{{ experience.title }}</h3>
					<p>{{ experience.company }}</p>
					<p>{{ experience.date }}</p>
					<ul>
						<li v-for="task in experience.tasks" :key="task.id">{{ task.description }}</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Experience {
	id: number;
	title: string;
	company: string;
	date: string;
	tasks: Task[];
}

interface Task {
	id: number;
	description: string;
}

export default defineComponent({
	name: 'Resume',
	data() {
		return {
			name: 'Alen Subasic',
			title: 'Software Engineer',
			experiences: [
				{
					id: 1,
					title: 'Experience Title',
					company: 'Company Name',
					date: 'January 2020 - Present',
					tasks: [
						{
							id: 1,
							description: 'Task 1 description',
						},
						{
							id: 2,
							description: 'Task 2 description',
						},
					],
				},
			] as Experience[],
		};
	},
});
</script>

<style scoped>
.resume {
	display: flex;
	justify-content: center;
}
</style>