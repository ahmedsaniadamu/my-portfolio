import React from 'react';

const reasons = [
	{
		icon: 'fas fa-lightbulb',
		title: 'Innovative Solutions',
		desc: 'I bring creative problem-solving and fresh ideas to every project, ensuring unique and effective results.'
	},
	{
		icon: 'fas fa-code',
		title: 'Clean & Scalable Code',
		desc: 'My code is maintainable, well-documented, and built for scalability, making future updates seamless.'
	},
	{
		icon: 'fas fa-users',
		title: 'Collaborative Approach',
		desc: 'I work closely with clients and teams, valuing communication and transparency throughout the process.'
	},
];


const WhyChooseMe = () => {
	return (
		<section className="why-choose-me-section py-1 bg-dark" id="why-choose-me">
			<div className="container" style={{ padding: '2.5rem 0.5rem' }}>
				<h3 className="section-title text-info fw-bold mb-4 text-center" style={{ fontSize: '1.1rem' }}>Why Choose Me For Your Business?</h3>
				<div
					className="d-flex flex-row flex-wrap justify-content-center align-items-stretch gap-4 why-choose-stack mx-auto"
					style={{ maxWidth: 1000, padding: '0.5rem 0.5rem 1.5rem 0.5rem' }}
				>
					{reasons.map((reason, idx) => (
						<div
							className="card why-choose-card border-0 text-white rounded-4 position-relative h-100"
							key={idx}
							style={{
								minWidth: 0,
								width: 250,
								background: 'linear-gradient(135deg, #232526 0%, #1c1e21 100%)',
								padding: '1.3rem 0.6rem',
								borderRadius: '1.3rem',
								boxShadow: '0 8px 22px rgba(13,202,240,0.10), 0 2px 8px rgba(0,0,0,0.18)',
								transition: 'transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s',
								cursor: 'pointer',
								position: 'relative',
								overflow: 'visible',
							}}
							onMouseOver={e => {
								e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)';
								e.currentTarget.style.boxShadow = '0 16px 48px 0 rgba(13,202,240,0.18), 0 4px 16px rgba(0,0,0,0.22)';
							}}
							onMouseOut={e => {
								e.currentTarget.style.transform = 'none';
								e.currentTarget.style.boxShadow = '0 8px 32px rgba(13,202,240,0.10), 0 2px 8px rgba(0,0,0,0.18)';
							}}
						>
							<div className="d-flex align-items-center mb-3 justify-content-center">
								<span className={`${reason.icon} fa-lg text-info me-2`} style={{ fontSize: '1.2rem' }}></span>		
							</div>
							<h5 className="fw-bold mb-2 text-center" style={{ fontSize: '0.8rem', color: '#fff', letterSpacing: 0.2 }}>{reason.title}</h5>
							<p className="mb-0 text-center text-muted-small" style={{ fontSize: '0.54rem', lineHeight: 1.6 }}>{reason.desc}</p>
							<div style={{position:'absolute',top:0,right:0,width:'40px',height:'40px',background:'radial-gradient(circle at 70% 30%, #f97316 0%, transparent 80%)',borderTopRightRadius:'1.3rem',zIndex:0,opacity:0.18}}></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseMe;
