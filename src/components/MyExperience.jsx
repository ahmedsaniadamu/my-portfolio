import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
	{
		role: 'Frontend Engineer | Team Lead',
		company: 'Lorem Excellentiam Services',
		period: `2023 - ${new Date().getFullYear()}`,
		description: 'Developed and maintained scalable web applications using React, Next, Cypress, TypeScript, and modern UI frameworks. Collaborated with cross-functional teams to deliver high-quality products.'
	},
	{
		role: 'Full Stack Engineer',
		company: '2Zero Group',
		period: `2025 - 2026`,
		description: 'Build, tested and deployed MVP for a fintech startup using React, Next js, Node.js, and Postgress. Implemented responsive design and optimized performance for a seamless user experience, also designed and implemented RESTful APIs'
	},
	{
		role: 'Software Engineer',
		company: 'Fanndrop',
		period: '2025 - 2025',
		description: 'Collaborated with the development team to build the next generation music platform for younger artist to showcase their talent and connect with fans. Gained hands-on experience in contributing to the frontend team.'
	},
	{
		role: 'Frontend Engineer Intern',
		company: '9ijakids',
		period: '2022 - 2023',
		description: 'Gaining hands-on experience as a Frontend Developer by contributing to real EdTech products.'
	}
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15, delayChildren: 0.2 }
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const MyExperience = () => {
	return (
		<section className="experience-section py-0 pt-3" id="experience">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
				variants={containerVariants}
				className="container"
			>
				<motion.h3
					variants={itemVariants}
					className="section-title text-info fw-bold mb-1 text-center"
					style={{ fontSize: '1rem' }}
				>
					My Work Experience
				</motion.h3>
				<motion.p
					variants={itemVariants}
					className="text-center text-muted-small mb-4"
					style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.6)' }}
				>
					Not just numbers — A snapshot of my professional journey, showcasing the roles and projects that have shaped my career.
				</motion.p>
				<div className="timeline">
					{experiences.map((exp, idx) => (
						<motion.div
							className="timeline-item"
							key={idx}
							variants={itemVariants}
							whileHover={{ y: -5, backgroundColor: '#1c1e21', boxShadow: "0px 8px 24px rgba(249, 115, 22, 0.12)" }}
						>
							<div className="timeline-dot"></div>
							<div className="timeline-line"></div>
							<div className="timeline-content">
								<h5 className="fw-bold">
									{exp.role} <span className="text-info">@ {exp.company}</span>
								</h5>
								<span className="text-muted small">{exp.period}</span>
								<p>{exp.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default MyExperience;
